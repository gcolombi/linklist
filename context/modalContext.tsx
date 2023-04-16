import { Link } from '@/lib/types';
import useLockedScroll from '@/hooks/useLockedScroll';
import useWindowLocation from '@/hooks/useWindowLocation';
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';

interface ModalContextType {
    open: boolean;
    hasNativeSupport: boolean;
    link: Link;
    setModal: (state: boolean, link: Link, isTopBar?: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
    open: false,
    hasNativeSupport: false,
    link: undefined,
    setModal: () => {}
});

export function ModalContextProvider({
    children
}: {
    children: ReactNode;
}) {
    const [open, setIsOpen] = useState(false);
    const [hasNativeSupport, setHasNativeSupport] = useState(false);
    const [link, setLink] = useState<Link>(undefined);
    const [locked, setLocked] = useLockedScroll(false);
    const { currentURL } = useWindowLocation();

    useEffect(() => {
        if (navigator['share']) {
            setHasNativeSupport(true);
        }
    }, []);

    const nativeSupportHandler = (state: boolean, link: Link) => {
        if (state) {
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
    };

    const setModal = useCallback((state: boolean, link: Link, isTopBar?: boolean) => {
        if (hasNativeSupport && !isTopBar) {
            nativeSupportHandler(state, link);
        } else {
            setIsOpen(state);
            setLink(link);
            setLocked(state);
        }

    }, [hasNativeSupport, setIsOpen, setLink, setLocked]);

    const contextValue: ModalContextType = {
        open,
        hasNativeSupport,
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