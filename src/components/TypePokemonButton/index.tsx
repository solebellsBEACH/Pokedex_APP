import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface ITypePokemonButton {
    label: string, index: number
}

export const TypePokemonButton = ({ index, label }: ITypePokemonButton) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <Container
            key={index}
            onPress={() => setIsActive(!isActive)}
            isActive={isActive} >
            <TextButton isActive={isActive} >{label.charAt(0).toUpperCase() + label.slice(1)}</TextButton>
        </Container>
    )
}