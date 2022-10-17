import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IPokemonType } from '../../utils/interfaces';
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
                    <Title>Filtro</Title>
                    <TouchableOpacity
                        onPress={() => { setFilterActived('') }}
                    ><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                    <ExitIconContainer
                        onPress={onCloseDrawer}
                    ><ExitIcon /></ExitIconContainer>
                </ContentTop>
                <Content>
                    <ContentTitle>Tipo</ContentTitle>
                    <ContentTypes<any>
                        data={filters}
                        keyExtractor={(item: any, index: number) => 'TypePokemon' + index}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                </Content>
            </Container>
        </>
    )
}