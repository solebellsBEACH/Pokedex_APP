import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import { PokemonInformations } from '../../components';
import theme from '../../global/theme';
import { usePokemonColors } from '../../utils/hooks';
import { INavigationProps } from '../../utils/interfaces';
import { Container, ArrowLeftIcon, ContentTop, ContentLeft, PokemonName, ContentRight, CategoryText, PokemonNumber, CategoriesContainer, CategoryItem, CategoriesFlatList, ContentBottom, PokemonItemContent, PokemonItemContainer, PokemonImage } from './styles'

export const PokemonScreen = () => {
    const navigation = useNavigation<INavigationProps>();

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
                    color={usePokemonColors({ pokemonType: 'water' }).primary}>
                    <CategoryText>{label}</CategoryText>
                </CategoryItem>
            </CategoriesContainer>
        </>
    }

    const renderContentTop = () => {
        return <ContentTop>
            <ContentLeft>
                <PokemonName>Charizard</PokemonName>
                <CategoriesFlatList
                    keyExtractor={(item, index) => `key-${index}`}
                    data={[{ name: 'Fogo' }, { name: 'Água' }, { name: 'Pedra' }, { name: 'Vento' }]}
                    renderItem={({ item, index }) => {
                        return renderCategoryItem({ label: item.name, index });
                    }}
                    numColumns={3}
                />
            </ContentLeft>
            <ContentRight>
                <PokemonNumber>#004</PokemonNumber>
            </ContentRight>
        </ContentTop>



    }



    const renderPokemonItem = () => {
        return <PokemonItemContainer
        >
            <PokemonItemContent
                colors={[usePokemonColors({ pokemonType: 'water' }).primary, usePokemonColors({ pokemonType: 'water' }).secondary]}
            >
                <SvgUri
                    height="170"
                    source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg' }}
                />
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