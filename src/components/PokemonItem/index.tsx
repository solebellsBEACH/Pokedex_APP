import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { api } from '../../utils/api';
import { capitalizeFirstLetter } from '../../utils/hooks';
import { INavigationProps, IPokemon } from '../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

interface IPokemonItem {
    index: number; label: string;
}
interface IPokemonData {
    isLoaded: boolean;
    pokemonData: IPokemon | null;
}

export const PokemonItem = ({ index, label }: IPokemonItem) => {
    const navigation = useNavigation<INavigationProps>();

    const [pokemon, setPokemon] = useState<IPokemonData | null>(null)

    const getPokemon = async () => {
        try {
            const req = await api.get(`pokemon/${label}`)
            setPokemon({ isLoaded: true, pokemonData: req.data })
        } catch (error) {
            setPokemon({ isLoaded: false, pokemonData: null })
            console.log(error)
        }
    }


    getPokemon()

    return (
        <Container
            key={index}
            onPress={() => { navigation.navigate('PokemonScreen') }}
        >
            <Content
            >
                <PokemonName>{capitalizeFirstLetter(label)}</PokemonName>
            </Content>
            <PokemonImage width={80} height={80} />
        </Container>
    )
}