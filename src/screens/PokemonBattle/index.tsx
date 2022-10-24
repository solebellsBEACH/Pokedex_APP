import React, { useEffect } from 'react'
import { Image, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { PokemonBattleLogo } from '../../assets'
import { Container, HeadLogo, Content } from './styles'
import { PokemonChoose } from './usePokemonBattle/components'
import { Creators as HomeActions } from '../../store/ducks/home'

export const PokemonBattle = (props: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20
        }))

    }, [props])

    return (
        <Container>
            <HeadLogo
                height={100}
                source={require('../../assets/pokemon_battle.png')} />
            <Content>
                <PokemonChoose />
            </Content>
        </Container>
    )
}
