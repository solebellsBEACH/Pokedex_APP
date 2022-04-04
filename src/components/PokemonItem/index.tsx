import React from 'react'
import { Container, PokemonName, PokemonImage, Content } from './styles'

export const PokemonItem = () => {
    return (
        <Container>

            <Content
            >
                <PokemonName>Bulbasauro</PokemonName>
            </Content>
            <PokemonImage />
        </Container>
    )
}