import React from 'react'
import { Image, Text } from 'react-native'
import { PokemonBattleLogo } from '../../assets'
import { Container,HeadLogo, Content  } from './styles'

export const PokemonBattle = () => {
    return (
        <Container>
         <HeadLogo 
         height={100}
         source={require('../../assets/pokemon_battle.png')} />
         <Content></Content>
        </Container>
    )
}
