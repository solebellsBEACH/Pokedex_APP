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

export interface IPokemon {
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
}
export interface IPokemonPreRequest {
    name: string;
    url: string;
}
export interface IPokemonRequest {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemonPreRequest[];
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}