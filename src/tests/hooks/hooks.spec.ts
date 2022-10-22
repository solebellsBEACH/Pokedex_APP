import { useAddZeroInNumber, useCapitalizeFirstLetter } from "../../utils/hooks"

test('Testando hook que retorna a string com a primeira letra maiúscula!!', () => {
    expect(useCapitalizeFirstLetter('lucas'))
        .toBe('Lucas')
})
test('Testando hook que adiciona 0 no número!!', () => {
    expect(useAddZeroInNumber(9))
        .toBe('009')
    expect(useAddZeroInNumber(20))
        .toBe('020')
})