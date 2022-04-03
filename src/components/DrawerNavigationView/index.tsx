import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TypePokemonButton } from '../TypePokemonButton'
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'


interface IDrawerNavigationViewProps {
    onCloseDrawer: () => void
}

export const DrawerNavigationView = ({ onCloseDrawer }: IDrawerNavigationViewProps) => {
    return (
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
                <ContentTypes>
                    <TypePokemonButton />
                </ContentTypes>
            </Content>
        </Container>
    )
}