import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface ITypePokemonButton {
    label: string, index: number;
    filterActived: string; setFilterActived: React.Dispatch<React.SetStateAction<string>>;
}

export const TypePokemonButton = ({ index, label, filterActived, setFilterActived }: ITypePokemonButton) => {

    const isActive = () => {
        return filterActived == label
    }

    const handlePress = () => {
        if(!isActive())setFilterActived(label)
        else setFilterActived('')
    }
    
    return (
        <Container
            key={index}
            onPress={handlePress}
            isActive={isActive()} >
            <TextButton isActive={isActive()} >{label.charAt(0).toUpperCase() + label.slice(1)}</TextButton>
        </Container>
    )
}