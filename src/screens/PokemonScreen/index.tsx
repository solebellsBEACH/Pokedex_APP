import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgUri } from 'react-native-svg';
import { PokemonInformations } from '../../components';
import { api } from '../../utils/api';
import { useAddZeroInNumber, useCapitalizeFirstLetter, usePokemonColors } from '../../utils/hooks';
import { IPokemonScreenNavigationProps, IPokemon } from '../../utils/interfaces';
import { Container, ArrowLeftIcon, ContentTop, ContentLeft, PokemonName, ContentRight, CategoryText, PokemonNumber, CategoriesContainer, CategoryItem, CategoriesFlatList, ContentBottom, PokemonItemContent, PokemonItemContainer, PokemonImage } from './styles'
import * as Progress from 'react-native-progress';

export const PokemonScreen = () => {
    const navigation = useNavigation<IPokemonScreenNavigationProps>();
    const id = 1;
    const [pokemon, setPokemon] = useState<IPokemon | null>(null)

    const getPokemon = async () => {
        try {
            const { data } = await api.get(`pokemon/${id}`)
            setPokemon(data)

        } catch (error) {
            console.log('getPokemon - Screen')
        }
    }

    useEffect(() => {
        getPokemon()
    }, [id])

    interface ICategoryItem {
        label: string;
        index: number;
    }

    const renderCategoryItem = ({ index, label }: ICategoryItem) => {
        return <>
            <CategoriesContainer
                key={index}
            >
                <CategoryItem
                    color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.types[0].type.name }).primary : 'blue'}>
                    <CategoryText>{label}</CategoryText>
                </CategoryItem>
            </CategoriesContainer>
        </>
    }

    const renderContentTop = () => {
        return <ContentTop>
            <ContentLeft>
                <PokemonName>{pokemon != null ? useCapitalizeFirstLetter(pokemon.forms[0].name) : ''}</PokemonName>
                <CategoriesFlatList
                    keyExtractor={(item, index) => `key-${index}`}
                    data={pokemon != null ? pokemon.types : []}
                    renderItem={({ item, index }) => {
                        return renderCategoryItem({ label: useCapitalizeFirstLetter(item.type.name), index });
                    }}
                    numColumns={3}
                />
            </ContentLeft>
            <ContentRight>
                <PokemonNumber>#{useAddZeroInNumber(id)}</PokemonNumber>
            </ContentRight>
        </ContentTop>



    }

    const renderPokemonItem = () => {
        return <PokemonItemContainer
        >
            <PokemonItemContent
                colors={pokemon != null ? [usePokemonColors({ pokemonType: pokemon.types[0].type.name }).primary, usePokemonColors({ pokemonType: pokemon.types[0].type.name }).secondary] : ['blue', 'white']}
            >
                {/* {pokemon != null ? <SvgUri
                height={RFValue(170) + ''}
                uri={pokemon.sprites.other.dream_world.front_default}
            /> : <Progress.Circle size={30} indeterminate={true} />} */}
                <View><Progress.Circle size={50} indeterminate={true} /></View>

            </PokemonItemContent>
        </PokemonItemContainer>
    }
    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                ><ArrowLeftIcon width={18} height={18} /></TouchableOpacity>
                {renderContentTop()}
                <ContentBottom>
                    {renderPokemonItem()}
                </ContentBottom>
            </Container>
            <PokemonInformations />
        </>
    )
}