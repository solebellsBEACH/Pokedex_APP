import { ReactNode } from "react";

export interface INavigationProps<T = never> {
    navigate: (screen: string, data?: T) => void;
    goBack: () => void;
    screen: string;
}
export interface IPokemonType {
    name: string;
}
export interface IPokemonTypeRequest {
    count: number,
    results: IPokemonType[];
}

export interface IPokemon {
    _id: string;
    name: string,
    front_default: string,
    height: number,
    stat_value: [hp: IStatValue, attack: IStatValue, defense: IStatValue, specialAttack: IStatValue, specialDefense: IStatValue, speed: IStatValue,],
    abilities: { value: number, name: string }[],
    type: 'fire' |
    'grass' |
    'electric' |
    'water' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'normal'
}

export interface IStatValue {
    stats_value: number, name: string
}
export interface IPokemonRequest {
    success: boolean,
    status: number
    data: IPokemon[];
}

//  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - -  - - - - - - - //
export interface IRequestContextProps {
}

export interface IRequestContextProviderProps {
    children: ReactNode;
    isPost?: number;
}

export type IPossiblePokemonKeys = {
    pokemonType: 'fire' |
    'grass' |
    'electric' |
    'water' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'ghost' |
    'ice' |
    'dark' |
    'normal'
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
    cart: { _id: string, name: string, front_default: string }[]
}
export interface IHomeDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemons: IPokemonRequest | null,
    success: boolean,
    userLoginLoading: boolean,
    userLoginError: boolean,
    userLoginData: {
        success: boolean,
        message: string,
        token: string
    } | null,
    createUserLoading: boolean,
    createUserError: boolean,
    createUserData: {
        success: boolean,
        message: string,
        token: string
    } | null,
    userLoading: boolean,
    userError: boolean,
    userData: {
        success: boolean,
        message: string,
        data: IUser
    } | null,
    userCartLoading: boolean,
    userCartError: boolean,
    userCartData: {
        success: boolean,
        message: string,
        data: { _id: string, name: string, front_default: string, height: number, type: "fire" | "grass" | "electric" | "water" | "ground" | "rock" | "fairy" | "poison" | "bug" | "dragon" | "psychic" | "flying" | "fighting" | "normal" }[]
    } | null,
}
export interface IPokemonDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemonData: IPokemon | null,
    success: boolean,
    loadingPokemonTypes: boolean,
    errorPokemonTypes: boolean,
    pokemonTypes: { success: boolean, status: number, data: IPokemonType[] } | null,
    successPokemonTypes: boolean,
    addPokemonInCartLoading: boolean,
    addPokemonInCartError: boolean,

}

export interface IPokemonScreenDuckInitialState {
    loading: boolean,
    error: boolean,
    pokemonData: { success: boolean, status: number, data: IPokemon[] } | null,
    success: boolean,
}

export interface IReduxState {
    home: IHomeDuckInitialState,
    pokemon: IPokemonDuckInitialState,
    pokemonScreen: IPokemonScreenDuckInitialState
}

export interface IPokemonScreenParams {
    _id: string
}
export interface IBattleScreenParams {
    you: IPokemon,
    computer: IPokemon
}

export interface IBattleResult {
    hp: 'win' | 'lose' | 'goalless',
    attack: 'win' | 'lose' | 'goalless',
    defense: 'win' | 'lose' | 'goalless',
    ['special-attack']: 'win' | 'lose' | 'goalless',
    ['special-defense']: 'win' | 'lose' | 'goalless',
    speed: 'win' | 'lose' | 'goalless'
}