import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { IPokemon, IReduxState } from '../../../../../utils/interfaces'
import { IPokemonBattleState } from '../../interface'
import { PokemonItem } from '../PokemonItem'
import { Content, Container, Title } from './style'

interface IPokemonChooseProps {
    pokemonBattleState: IPokemonBattleState
    setPokemonBattleState: React.Dispatch<React.SetStateAction<IPokemonBattleState>>
}

export const PokemonChoose = ({ pokemonBattleState, setPokemonBattleState }: IPokemonChooseProps) => {
    const homeData = useSelector((state: IReduxState) => state.home)
    const renderItem = ({ item }: { item: IPokemon }) => {
        return <PokemonItem
            height={item.height}
            name={item.name}
            type={item.type}
            frontDefault={item.front_default}
        />
    }


    return (
        <Container>
            <Title>Escolha seu Pokemon: </Title>
            <Content<any>
                data={homeData?.pokemons.data}
                keyExtractor={(e: any, i: number) => `itemPokemonChoose${i}`}
                renderItem={renderItem}
            />
        </Container>
    )
}