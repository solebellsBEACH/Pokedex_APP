import { IPokemonBattleState } from "../../interface"

export const getState = (props: { pokemonBattleState: IPokemonBattleState, chooseType: 'you' | 'computer' })=>{
    const { chooseType, pokemonBattleState } = props
    if (chooseType == 'you') return pokemonBattleState.yourPokemon
    else return pokemonBattleState.computerPokemon
}

export const isOpen = (props: { pokemonBattleState: IPokemonBattleState, chooseType: 'you' | 'computer' }): boolean => {
    let state = getState(props)
    return state == null
}

