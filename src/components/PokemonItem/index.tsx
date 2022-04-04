import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { INavigationProps } from '../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

export const PokemonItem = () => {
    const navigation = useNavigation<INavigationProps>();
    return (
        <Container
            onPress={() => { navigation.navigate('PokemonScreen') }}
        >
            <Content
            >
                <PokemonName>Bulbasauro</PokemonName>
            </Content>
            <PokemonImage />
        </Container>
    )
}