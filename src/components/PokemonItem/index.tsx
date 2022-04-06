import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { capitalizeFirstLetter } from '../../utils/hooks';
import { INavigationProps } from '../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

interface IPokemonItem {
    index: number; label: string;
}


export const PokemonItem = ({ index, label }: IPokemonItem) => {
    const navigation = useNavigation<INavigationProps>();
    return (
        <Container
            key={index}
            onPress={() => { navigation.navigate('PokemonScreen') }}
        >
            <Content
            >
                <PokemonName>{capitalizeFirstLetter(label)}</PokemonName>
            </Content>
            <PokemonImage />
        </Container>
    )
}