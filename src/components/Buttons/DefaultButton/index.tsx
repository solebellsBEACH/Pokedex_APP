import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface IDefaultButton {
    label: string,
    handlePress: () => void
}

export const DefaultButton = ({  label, handlePress}: IDefaultButton) => {

    return (
        <Container
            onPress={handlePress}>
            <TextButton>{label}</TextButton>
        </Container>
    )
}