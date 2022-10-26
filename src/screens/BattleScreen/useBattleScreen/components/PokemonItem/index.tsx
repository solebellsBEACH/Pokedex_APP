import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useCapitalizeFirstLetter } from '../../../../../utils/hooks'
import { IPokemon } from '../../../../../utils/interfaces'
import { PokemonInformations } from '../../../../PokemonScreen/usePokemonScreen/components'
import { Container, Content, PokemonImage, Title } from './styles'

interface IPokemonItem {
    pokemon: IPokemon
}

export const PokemonItem = ({ pokemon }: IPokemonItem) => {
    return (
        <Container>
            <PokemonImage
                height={RFValue(220) + ''}
                uri={pokemon.front_default}
            />
            <Title>{useCapitalizeFirstLetter(pokemon.name)}</Title>
            <Content>
            <PokemonInformations pokemon={pokemon} />
            </Content>
        </Container>
    )
}