import React from 'react'
import { Text } from 'react-native'
import { LoadingComponent } from '../../components'
import { Container } from './styles'



export const LoadingScreen = () => {
    return (
        <Container>
            <LoadingComponent size={250}/>
        </Container>
    )
}