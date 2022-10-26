import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface IDefaultButton {
    label: string,
    handlePress: (props:any) => void
    width?: string
    height?: string
    color?: string
}

export const DefaultButton = ({ label, handlePress, width, height,color }: IDefaultButton) => {

    return (
        <Container
            width={width} 
            height={height}
            onPress={handlePress}
            color={color}
            >
            <TextButton>{label}</TextButton>
        </Container>
    )
}