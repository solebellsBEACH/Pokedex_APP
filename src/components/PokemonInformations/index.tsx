import React from 'react'

import { Container, ContentTop, TabSelectorContainer, TabSelectorText } from './styles'

export const PokemonInformations = () => {

    const TabSelector = () => {
        return <TabSelectorContainer isActive={true}>
            <TabSelectorText isActive={true}>Sobre</TabSelectorText>
        </TabSelectorContainer>
    }

    return (
        <Container>
            <ContentTop>
                <TabSelector />
                <TabSelector />
                <TabSelector />
            </ContentTop>
        </Container>
    )
}