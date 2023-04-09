import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
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
    // const [ref, setRef] = useState(null);
    const { scrollY } = useScrollbar();

    const contextValue: TopBarContextType = {
        // ref,
        // setRef,
        sticky: scrollY > 0
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