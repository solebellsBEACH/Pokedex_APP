import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { IPokemon, IReduxState } from '../../../../../utils/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container } from './style'

export const PokemonChoose = () => {
    const homeData = useSelector((state: IReduxState) => state.home)
    
    const renderItem = ({ item }: { item: IPokemon }) => {
        console.log(item.name)
        return <PokemonItem
        height={item.height}
        name={item.name}
        type={item.type}
        />}
    return (
        <Container<any>
            data={homeData.pokemons}
            keyExtractor={(e: any, i: number) => `itemPokemonChoose${i}`}
            renderItem={()=>{
                console.log('jjdjd')
                return <></>}}
        />
    )
}