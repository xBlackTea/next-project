"use client"
import { ReactNode, createContext, useState } from 'react';

interface ProviderContextType {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const Context = createContext<ProviderContextType | null>(null);

export const ContextProvider = ({children}: ContextProviderProps) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    
    const contextValue = {
        isDrawerOpen,
        setIsDrawerOpen,
    };

    return (
        <Context.Provider value={contextValue}>
        {children}
        </Context.Provider>
    );
};