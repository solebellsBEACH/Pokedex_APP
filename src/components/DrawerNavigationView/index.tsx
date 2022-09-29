import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'
interface IDrawerNavigationViewProps {
    onCloseDrawer: () => void;
    filtersActiveds: string[]; setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DrawerNavigationView = ({ onCloseDrawer, filtersActiveds, setFiltersActiveds }: IDrawerNavigationViewProps) => {

    return (
        <>
            <Container>
                <ContentTop>
                    <Title>Filtro</Title>
                    <TouchableOpacity
                        onPress={() => { setFiltersActiveds([]) }}
                    ><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                    <ExitIconContainer
                        onPress={onCloseDrawer}
                    ><ExitIcon /></ExitIconContainer>
                </ContentTop>
                <Content>
                    <ContentTitle>Tipo</ContentTitle>
                    {/* <ContentTypes
                        data={screensStoreState.typesRequest.results}
                        keyExtractor={(item, index) => `key-${index}`}
                        renderItem={({ item, index }) => {
                            return <TypePokemonButton
                                filtersActiveds={filtersActiveds} setFiltersActiveds={setFiltersActiveds}
                                index={index} key={index} label={item.name} />
                        }}
                        numColumns={2}
                    /> */}
                </Content>
            </Container>
        </>
    )
}