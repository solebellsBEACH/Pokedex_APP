import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { IPokemonRequest } from '../../utils/interfaces';
import { PokemonItem } from '../PokemonItem';
import { PokemonItensContent } from './styles'

interface IPokemonListProps {
    results: IPokemonRequest;
    handleOnEndReached: () => void
}

export const PokemonList = ({ results, handleOnEndReached }: IPokemonListProps) => {
    return (
        <PokemonItensContent
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `key-${index}`}
            data={results.data}
            renderItem={({ item, index }) => {
                // console.log(item)
                return <></>
                // return <PokemonItem index={index} label={item.name}  />
            }
            }
            numColumns={2}
            // ListFooterComponent={() => <View><ActivityIndicator size={50} color='black' /></View>}
            onEndReached={handleOnEndReached}
        />
    )
}