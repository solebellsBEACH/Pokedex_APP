import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks';
import { INavigationProps, IPokemon } from '../../../../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

interface IPokemonItem {
    pokemon: IPokemon
}

export const PokemonItem = ({ pokemon }: IPokemonItem) => {

    const navigation = useNavigation<INavigationProps<{ _id: string, }>>()

    return (
        <Container
            key={pokemon._id}
            onPress={() => {
                navigation.navigate('PokemonScreen', { _id: pokemon._id })
            }}
        >
            <Content
                color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'}
            >
                <PokemonName>{useCapitalizeFirstLetter(pokemon.name)}</PokemonName>
            </Content>
            {pokemon != null ? <PokemonImage
                height={RFValue(82) + ''}
                uri={pokemon.front_default}
            /> : <ActivityIndicator style={{ marginTop: '20%' }} size={40} color='black' />}
        </Container>
    )
}