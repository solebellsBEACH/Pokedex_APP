import { ReactNode } from "react";




export interface INavigationProps<T = never> {
    navigate: (screen: string, data?: T) => void;
    goBack: () => void;
    screen: string;
}


export interface IPokemonType {
    name: string;
    url: string;
}
export interface IPokemonTypeRequest {
    count: number,
    results: IPokemonType[];
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}