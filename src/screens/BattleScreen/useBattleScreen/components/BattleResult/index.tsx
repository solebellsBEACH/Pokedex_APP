import React from 'react'
import { Text } from 'react-native'
import { IPokemon } from '../../../../../utils/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container } from './styles'

interface IBattleResultProps {
    computer: IPokemon
    you: IPokemon
}

export const BattleResult = ({ computer, you}:IBattleResultProps) => {
    return (
        <Container>
           <PokemonItem pokemon={you}/>
        </Container>
    )
}