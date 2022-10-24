import React from 'react'
import { Container } from './style'
import Lottie from 'lottie-react-native';
interface ISwordComponent {
    size: number
}
export const SwordComponent = ({ size }: ISwordComponent) => {
    return (
        <Container
        size={size}       
        >
            <Lottie source={require('../../../../../assets/lottie/pokemon-battle-sword.json')} autoPlay loop />
        </Container>
    )
}