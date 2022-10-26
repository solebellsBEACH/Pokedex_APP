import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import theme from '../../global/theme';
import { INavigationProps, IPokemonType } from '../../utils/interfaces';
import { DefaultButton } from '../Buttons/DefaultButton';
import { TypePokemonButton } from '../TypePokemonButton';
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'
interface IDrawerNavigationViewProps {
    filters: IPokemonType[]
    onCloseDrawer: () => void;
    filterActived: string;
    setFilterActived: React.Dispatch<React.SetStateAction<string>>;
}

interface IPokemonRenderItem {
    item: IPokemonType, index: number
}
export const DrawerNavigationView = ({ onCloseDrawer, filterActived, setFilterActived, filters }: IDrawerNavigationViewProps) => {
    const navigation = useNavigation<INavigationProps>()
    const renderItem = ({ item, index }: IPokemonRenderItem) => {
        return <TypePokemonButton
            filterActived={filterActived}
            setFilterActived={setFilterActived}
            index={index}
            key={index}
            label={item.name}
        />
    }

    return (
        <>
            <Container>
                <ContentTop>
                    <Title>Filtros</Title>
                    <TouchableOpacity
                        onPress={() => { setFilterActived('') }}
                    ><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                    <ExitIconContainer
                        onPress={onCloseDrawer}
                    ><ExitIcon /></ExitIconContainer>
                </ContentTop>
                <Content>
                    <ContentTypes<any>
                        data={filters}
                        keyExtractor={(item: any, index: number) => 'TypePokemon' + index}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                    <DefaultButton
                        label='Ir para PokemonBattle'
                        handlePress={() => {
                            navigation.navigate('PokemonBattle')
                        }}
                    />
                </Content>
            </Container>
        </>
    )
}