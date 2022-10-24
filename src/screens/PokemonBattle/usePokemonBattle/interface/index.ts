import { IPokemon } from "../../../../utils/interfaces";

export interface IPokemonItem {
    name: string;
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
    'normal';
    height: number;
    frontDefault:string;
}

export interface IPokemonBattleState {
    yourPokemon: IPokemon | null
    computerPokemon: IPokemon | null
}