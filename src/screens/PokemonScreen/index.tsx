import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { INavigationProps } from '../../utils/interfaces';
import { Container, ArrowLeftIcon, ContentTop, ContentLeft, PokemonName, ContentRight, CategoryText, PokemonNumber, CategoriesContainer, CategoryItem, CategoriesFlatList } from './styles'

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
    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                ><ArrowLeftIcon width={18} height={18} /></TouchableOpacity>
                <ContentTop>
                    <ContentLeft>
                        <PokemonName>Charizard</PokemonName>
                        <CategoriesFlatList
                            data={[{ name: 'Fogo' }, { name: 'Fogo' }, { name: 'Fogo' }, { name: 'Fogo' }]}
                            renderItem={({ item, index }) => {
                                console.log(item)
                                return renderCategoryItem({ label: item.name, index })
                                // renderCategoryItem({ label: item.name, index })
                            }}
                            numColumns={3}
                        />
                    </ContentLeft>
                    <ContentRight>
                        <PokemonNumber>#004</PokemonNumber>
                    </ContentRight>
                </ContentTop>
            </Container>
        </>
    )
}