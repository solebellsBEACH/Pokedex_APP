import { IPokemonBattleState } from "../../interface"

export const isOpen = (props: { pokemonBattleState: IPokemonBattleState, chooseType: 'you' | 'computer' }): boolean => {
    const { chooseType, pokemonBattleState } = props

    let state = null
    if (chooseType == 'you') state = pokemonBattleState.yourPokemon
    else state = pokemonBattleState.computerPokemon
    
    return state == null
}

