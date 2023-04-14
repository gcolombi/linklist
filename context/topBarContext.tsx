import useScrollbar from '@/hooks/useScrollbar';
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from 'react';

interface TopBarContextType {
    ref: HTMLElement | null;
    setRef: Dispatch<SetStateAction<HTMLElement | null>>;
    sticky: boolean;
}

const TopBarContext = createContext<TopBarContextType>({
    ref: null,
    setRef: () => null,
    sticky: false
});

export function TopBarContextProvider({
    children
}: {
    children: ReactNode;
}) {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const { scrollY } = useScrollbar();

    const contextValue: TopBarContextType = {
        ref,
        setRef,
        sticky: scrollY > 38
    };

    return (
        <TopBarContext.Provider
            value={contextValue}
        >
            {children}
        </TopBarContext.Provider>
    );
};

export default function useTopBarContext(): TopBarContextType {
    return useContext(TopBarContext);
}