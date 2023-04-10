import { createContext, ReactNode, useContext } from 'react';
import useScrollbar from '@/hooks/useScrollbar';

interface TopBarContextType {
    sticky: boolean;
}

const TopBarContext = createContext<TopBarContextType>({
    sticky: false
});

export function TopBarContextProvider({
    children
}: {
    children: ReactNode
}) {
    const { scrollY } = useScrollbar();

    const contextValue: TopBarContextType = {
        sticky: scrollY > 38
    }

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