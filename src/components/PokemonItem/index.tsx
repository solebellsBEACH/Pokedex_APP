import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionSetActivePokemonId } from '../../store/ScreensStore/ScreensStore.store';
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

    const dispatch = useDispatch()

    const returnId = () => {
        url = url.slice(34)
        url = url.replace('/', '')
        return parseInt(url)
    }
    const id = returnId()
    const getPokemon = async () => {
        try {
            const req = await api.get(`pokemon/${label}`)
            setPokemon({ isLoaded: true, pokemonData: req.data })

        } catch (error) {
            setPokemon({ isLoaded: false, pokemonData: null })
        }
    }
    useEffect(() => {
        getPokemon()
    }, [label])
    return (
        <Container
            key={index}
            onPress={() => {
                dispatch(actionSetActivePokemonId({
                    id
                }))
                navigation.navigate('PokemonScreen')
            }}
        >
            <Content
            >
                <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
            </Content>
            <PokemonImage width={80} height={80} />
        </Container>
    )
}