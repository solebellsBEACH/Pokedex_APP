import React, { useState } from 'react'
import { Container, TextButton } from './styles'

export const TypePokemonButton = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <Container
            onPress={() => setIsActive(!isActive)}
            isActive={isActive} >
            <TextButton isActive={isActive} >Todos</TextButton>
        </Container>
    )
}