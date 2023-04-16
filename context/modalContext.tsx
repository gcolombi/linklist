import { Link } from '@/lib/types';
import useLockedScroll from '@/hooks/useLockedScroll';
import useWindowLocation from '@/hooks/useWindowLocation';
import useWindowSize from '@/hooks/useWindowSize';
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
    const { windowSize } = useWindowSize();

    useEffect(() => {
        if (navigator['share']) {
            setHasNativeSupport(true);
        }
    }, []);

    const nativeSupportHandler = (state: boolean, link: Link, isTopBar?: boolean) => {
        console.log(currentURL);
        console.log(windowSize.width);
        if (state && !isTopBar || windowSize.width !== undefined && windowSize.width > 640) {
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
        if (hasNativeSupport) {
            nativeSupportHandler(state, link, isTopBar);
        } else {
            setIsOpen(state);
            setLink(link);
            setLocked(state);
        }

    }, [hasNativeSupport, nativeSupportHandler, setIsOpen, setLink, setLocked]);

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