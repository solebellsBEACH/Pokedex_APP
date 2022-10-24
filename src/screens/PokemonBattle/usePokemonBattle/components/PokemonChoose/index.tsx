import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { IPokemon, IReduxState } from '../../../../../utils/interfaces'
import { IPokemonBattleState } from '../../interface'
import { CloseChoose } from '../CloseChoose'
import { PokemonItem } from '../PokemonItem'
import { getState, isOpen } from './handle'
import { Content, Container, Title } from './style'

interface IPokemonChooseProps {
    pokemonBattleState: IPokemonBattleState
    setPokemonBattleState: React.Dispatch<React.SetStateAction<IPokemonBattleState>>
    chooseType: 'you' | 'computer'
}

export const PokemonChoose = ({ pokemonBattleState, setPokemonBattleState, chooseType }: IPokemonChooseProps) => {
    const homeData = useSelector((state: IReduxState) => state.home)

    const handlePress = ({ item }: { item: IPokemon }) => {
        if (chooseType == 'you') setPokemonBattleState({ ...pokemonBattleState, yourPokemon: item })
        else setPokemonBattleState({ ...pokemonBattleState, computerPokemon: item })
    }

    const renderItem = ({ item }: { item: IPokemon }) => {
        return <PokemonItem
            height={item.height}
            name={item.name}
            type={item.type}
            frontDefault={item.front_default}
            handlePress={handlePress}
        />
    }

    return (
        <Container>
            {isOpen({ chooseType, pokemonBattleState }) ? <><Title>Escolha {chooseType == 'you' ? 'seu Pokemon' : 'adversário'}:</Title>
                {homeData?.pokemons && <Content<any>
                    data={homeData.pokemons.data}
                    keyExtractor={(e: any, i: number) => `itemPokemonChoose${i}`}
                    renderItem={renderItem}
                />}</> : <CloseChoose pokemon={getState({ chooseType, pokemonBattleState })}/>}

        </Container>
    )

}