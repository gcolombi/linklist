import { Link } from '@/lib/types';
import useLockedScroll from '@/hooks/useLockedScroll';
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

    const setModal = useCallback((state: boolean, link?: Link) => {
        setIsOpen(state);
        setLink(link);
        setLocked(state);
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