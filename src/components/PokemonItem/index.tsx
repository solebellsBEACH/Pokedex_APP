import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api';
import { useCapitalizeFirstLetter } from '../../utils/hooks';
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
    const navigation = useNavigation<INavigationProps>();

    const [pokemon, setPokemon] = useState<IPokemonData | null>(null)

    const returnId = () => {
        url.slice(34)
        url.replace('/', '')
        return parseInt(url)
    }
    const id = returnId()
    const getPokemon = async () => {
        try {
            const req = await api.get(`pokemon/${label}`)
            setPokemon({ isLoaded: true, pokemonData: req.data })
            console.log('getPokemon - ITEM - success')
        } catch (error) {
            setPokemon({ isLoaded: false, pokemonData: null })
            console.log('getPokemon - ITEM')
        }
    }
    useEffect(() => {
        console.log(id, label)
        getPokemon()
    }, [label])


    return (
        <Container
            key={index}
            onPress={() => { navigation.navigate('PokemonScreen'), { id } }}
        >
            <Content
            >
                <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
            </Content>
            <PokemonImage width={80} height={80} />
        </Container>
    )
}