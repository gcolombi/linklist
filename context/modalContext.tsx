import { Link } from '@/lib/types';
import useLockedScroll from '@/hooks/useLockedScroll';
import useWindowLocation from '@/hooks/useWindowLocation';
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState
} from 'react';

interface ModalContextType {
    open: boolean;
    link?: Link;
    setModal: (state: boolean, link?: Link) => void;
}

const ModalContext = createContext<ModalContextType>({
    open: false,
    link: undefined,
    setModal: () => {}
});

export function ModalContextProvider({
    children
}: {
    children: ReactNode;
}) {
    const [open, setIsOpen] = useState(false);
    const [link, setLink] = useState<Link>(undefined);
    const [locked, setLocked] = useLockedScroll(false);
    const { currentURL } = useWindowLocation();

    const setModal = useCallback((state: boolean, link?: Link) => {
        if (navigator['share']) {
            navigator.share({
                title: link?.title,
                url: link?.id ? `${currentURL.split('?')[0]}?link=${link?.id}` : link?.href
            }).then(() => {
                setLink(link);
            })
            .catch(console.error);
        } else {
            setIsOpen(state);
            setLink(link);
            setLocked(state);
        }
    }, [setIsOpen, setLink, setLocked]);

    const contextValue: ModalContextType = {
        open,
        link,
        setModal
    };

    return (
        <ModalContext.Provider
            value={contextValue}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default function useModalContext(): ModalContextType {
    return useContext(ModalContext);
}