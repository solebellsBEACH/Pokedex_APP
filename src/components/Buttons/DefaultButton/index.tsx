import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface IDefaultButton {
    label: string,
    handlePress: (props:any) => void
    width?: string
    height?: string
}

export const DefaultButton = ({ label, handlePress, width, height }: IDefaultButton) => {

    return (
        <Container
            width={width} 
            height={height}
            onPress={handlePress}
            >
            <TextButton>{label}</TextButton>
        </Container>
    )
}