import { isOpen } from "../../../screens/PokemonBattle/usePokemonBattle/components/PokemonChoose/handle"
import { IPokemon } from '../../../utils/interfaces'
test('Testando hook que verifica se está aberto para escolher o pokemon', () => {

    const Pokemon: IPokemon = {
        _id: 'string',
        name: 'string',
        front_default: 'string',
        height: 1,
        stat_value: [{ stats_value: 1, name: 'string' }],
        abilities: [{ value: 1, name: 'string' }],
        type: 'fire'
    }

    expect(isOpen({
        chooseType: 'you', pokemonBattleState: {
            yourPokemon: null,
            computerPokemon: null
        }
    })).toBe(true)
    expect(isOpen({
        chooseType: 'you', pokemonBattleState: {
            yourPokemon: Pokemon,
            computerPokemon: null
        }
    })).toBe(false)
    expect(isOpen({
        chooseType: 'computer', pokemonBattleState: {
            yourPokemon: null,
            computerPokemon: null
        }
    })).toBe(true)
    expect(isOpen({
        chooseType: 'computer', pokemonBattleState: {
            yourPokemon: null,
            computerPokemon: Pokemon
        }
    })).toBe(false)

})