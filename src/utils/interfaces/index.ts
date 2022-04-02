import { ReactNode } from "react";

export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}


export interface INavigationProps<T = never> {
    navigate: (screen: string, data?: T) => void;
    goBack: () => void;
    screen: string;
}
