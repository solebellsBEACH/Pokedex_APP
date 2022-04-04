import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { TypePokemonButton } from '../TypePokemonButton'
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'
interface IDrawerNavigationViewProps {
    onCloseDrawer: () => void
}

export const DrawerNavigationView = ({ onCloseDrawer }: IDrawerNavigationViewProps) => {
    const homeScreenState = useSelector((state: RootState) => state.homeScreen);

    return (
        <>
            <Container>
                <ContentTop>
                    <Title>Filtro</Title>
                    <TouchableOpacity><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                    <ExitIconContainer
                        onPress={onCloseDrawer}
                    ><ExitIcon /></ExitIconContainer>
                </ContentTop>
                <Content>
                    <ContentTitle>Tipo</ContentTitle>
                    <ContentTypes
                        data={homeScreenState.typesRequest.results}
                        renderItem={({ item, index }) => {
                            return <TypePokemonButton index={index} key={index} label={item.name} />
                        }}
                        numColumns={2}
                    />
                </Content>
            </Container>
        </>
    )
}