import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
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
                <CategoryItem>
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
                colors={['#FF6969', '#FD9E5A']}
            >
                <PokemonImage />
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
        </>
    )
}