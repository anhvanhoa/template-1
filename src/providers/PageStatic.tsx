'use client';
import React, { createContext } from 'react';
type PageStaticContextType = Record<string, unknown>;
export const ContextPageStatic = createContext<
    [
        PageStaticContextType[],
        React.Dispatch<React.SetStateAction<PageStaticContextType[]>>
    ]
>([[], () => {}]);

type PageStaticProviderProps = {
    children: React.ReactNode;
};

const PageStaticProvider: React.FC<PageStaticProviderProps> = ({ children }) => {
    const [pageStatic, setPageStatic] = React.useState<PageStaticContextType[]>([]);
    return (
        <ContextPageStatic.Provider value={[pageStatic, setPageStatic]}>
            {children}
        </ContextPageStatic.Provider>
    );
};

export default PageStaticProvider;
