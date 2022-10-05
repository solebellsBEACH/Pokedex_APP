import React from 'react'
import { ListRenderItem, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { IPokemon, IPokemonRequest } from '../../utils/interfaces';
import { PokemonItem } from '../index';
import { PokemonItensContent } from './styles'

interface IPokemonListProps {
    results: IPokemon[] | null;
    handleOnEndReached: () => void
}


interface IPokemonRenderItem {
    item: IPokemon, index: number
}

export const PokemonList = ({ results, handleOnEndReached }: IPokemonListProps) => {
    const renderItem = ({ item }:IPokemonRenderItem) => <PokemonItem pokemon={item}  />

    return (
        <PokemonItensContent<any>
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            data={results}
            renderItem={renderItem}
            numColumns={2}
            onEndReached={handleOnEndReached}
            keyExtractor={(item:any, index:number) => 'itemPokemon'+index}
        />
    )
}

