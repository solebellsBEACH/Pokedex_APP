import { IPokemon } from "../../../../utils/interfaces";

export interface IPokemonItem {
    pokemon: IPokemon
    pokemonBattleState: IPokemonBattleState
    setPokemonBattleState: React.Dispatch<React.SetStateAction<IPokemonBattleState>>
    chooseType: 'you' | 'computer'
}

export interface IPokemonBattleState {
    yourPokemon: IPokemon | null
    computerPokemon: IPokemon | null
}

export interface ICloseChooseProps {
    pokemon: {
        _id: string, name: string, front_default: string, type: 'fire' |
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
    } | null
    chooseType: 'you' | 'computer'
    pokemonBattleState: IPokemonBattleState
    setPokemonBattleState: React.Dispatch<React.SetStateAction<IPokemonBattleState>>
    
}