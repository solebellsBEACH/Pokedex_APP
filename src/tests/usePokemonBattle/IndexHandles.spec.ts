import { readyForFight } from "../../screens/PokemonBattle/handle"

test('Testando hook que verifica se está aberto para escolher o pokemon', () => {
    expect(readyForFight({
        you: null,
        computer: null
    })).toBe(false)
    expect(readyForFight({
        you: null,
        computer: '-'
    })).toBe(false)
    expect(readyForFight({
        you: '-',
        computer: '-'
    })).toBe(true)
})