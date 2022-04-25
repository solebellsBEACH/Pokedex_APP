import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { IPokemonPreRequest } from '../../utils/interfaces';
import { PokemonItem } from '../PokemonItem';
import { PokemonItensContent } from './styles'

interface IPokemonListProps {
    results: IPokemonPreRequest[];
    handleOnEndReached: () => void
}

export const PokemonList = ({ results, handleOnEndReached }: IPokemonListProps) => {
    return (
        <PokemonItensContent
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `key-${index}`}
            data={results}
            renderItem={({ item, index }) => {
                return <PokemonItem index={index} label={item.name} url={item.url} />
            }
            }
            numColumns={2}
            ListFooterComponent={() => <View><ActivityIndicator size={50} color='black' /></View>}
            onEndReached={handleOnEndReached}
        />
    )
}