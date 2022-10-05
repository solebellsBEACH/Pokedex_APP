import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, memo } from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '../../utils/api';
import { returnId, useCapitalizeFirstLetter, usePokemonColors } from '../../utils/hooks';
import { INavigationProps, IPokemon } from '../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

interface IPokemonItem {
    pokemon: IPokemon
}
interface IPokemonData {
    isLoaded: boolean;
    pokemonData: IPokemon | null;
}

export const PokemonItem = ({ pokemon }: IPokemonItem) => {
    // const navigation = useNavigation<INavigationProps<{ id: number }>>();

    return (
        <Container
            key={pokemon._id}
            onPress={() => {
                // navigation.navigate('PokemonScreen', { id })
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