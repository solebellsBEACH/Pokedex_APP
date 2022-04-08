import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { api } from '../../utils/api';
import { useCapitalizeFirstLetter, usePokemonColors } from '../../utils/hooks';
import { INavigationProps, IPokemon } from '../../utils/interfaces';
import { Container, PokemonName, PokemonImage, Content } from './styles'

interface IPokemonItem {
    index: number; label: string; url: string
}
interface IPokemonData {
    isLoaded: boolean;
    pokemonData: IPokemon | null;
}

export const PokemonItem = ({ index, label, url }: IPokemonItem) => {
    const navigation = useNavigation<INavigationProps<{ id: number }>>();

    const [pokemonPreRequest, setPreRequestPokemon] = useState<IPokemonData | null>(null)

    const [pokemon, setPokemon] = useState<IPokemon | null>(null)

    const getPokemon = async () => {
        try {
            const { data } = await api.get(`pokemon/${id}`)
            setPokemon(data)
        } catch (error) {

        }
    }
    const getPreRequestPokemon = async () => {
        try {
            const req = await api.get(`pokemon/${label}`)
            setPreRequestPokemon({ isLoaded: true, pokemonData: req.data })

        } catch (error) {
            setPreRequestPokemon({ isLoaded: false, pokemonData: null })
        }
    }

    const returnId = () => {
        url = url.slice(34)
        url = url.replace('/', '')
        return parseInt(url)
    }
    const id = returnId()

    useEffect(() => {
        getPreRequestPokemon()
    }, [label])

    useEffect(() => {
        getPokemon()
    }, [pokemonPreRequest?.isLoaded])

    return (
        <Container
            key={index}
            onPress={() => {
                navigation.navigate('PokemonScreen', { id })
            }}
        >
            <Content
                color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.types[0].type.name }).primary : 'blue'}
            >
                <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
            </Content>
            {pokemon != null ? <PokemonImage
                height={RFValue(82) + ''}
                uri={pokemon.sprites.other.dream_world.front_default}
            /> : <ActivityIndicator style={{ marginTop: '20%' }} size={40} color='black' />}
        </Container>
    )
}