import React from 'react'
import { BackgroundLogIn } from '../../assets'

import { Container, LogoPokemon, BackgroundImage } from './styles'

export const LogIn = () => {
    return (
        <BackgroundImage
            resizeMode="cover"
            source={BackgroundLogIn}
        >
            <LogoPokemon />
            <Container>

            </Container>
        </BackgroundImage>
    )
}