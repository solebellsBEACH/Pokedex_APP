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



    const renderItem = ({ item }: { item: IPokemon }) => {
        return <PokemonItem
            pokemon={item}
            chooseType={chooseType}
            pokemonBattleState={pokemonBattleState}
            setPokemonBattleState={setPokemonBattleState}
        />
    }

    return (
        <Container>
            {isOpen({ chooseType, pokemonBattleState }) ? <><Title>Escolha {chooseType == 'you' ? 'seu Pokemon' : 'adversário'}:</Title>
                {homeData?.pokemons && <Content<any>
                    data={homeData.pokemons.data}
                    keyExtractor={(e: any, i: number) => `itemPokemonChoose${i}`}
                    renderItem={renderItem}
                />}</> : <CloseChoose
                pokemon={getState({ chooseType, pokemonBattleState })} />}

        </Container>
    )

}