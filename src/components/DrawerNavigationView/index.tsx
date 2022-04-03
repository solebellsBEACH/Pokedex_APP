import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'

export const DrawerNavigationView = () => {
    return (
        <Container>
            <ContentTop>
                <Title>Filtro</Title>
                <TouchableOpacity><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                <ExitIconContainer><ExitIcon /></ExitIconContainer>
            </ContentTop>
            <Content>
                <ContentTitle>Tipo</ContentTitle>
                <ContentTypes></ContentTypes>
            </Content>
        </Container>
    )
}