import React from 'react'
import { Container } from './styles'
import Lottie from 'lottie-react-native';
interface ILoadingComponent {
    size: number
}
export const LoadingComponent = ({ size }: ILoadingComponent) => {
    return (
        <Container
        size={size}       
        >
            <Lottie source={require('../../assets/lottie/pokemon-ball.json')} autoPlay loop />
        </Container>
    )
}