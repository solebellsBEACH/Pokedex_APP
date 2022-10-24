import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, HeadLogo, Content } from './styles'
import { PokemonChoose } from './usePokemonBattle/components'
import { Creators as HomeActions } from '../../store/ducks/home'
import { IPokemon } from '../../utils/interfaces'
import { IPokemonBattleState } from './usePokemonBattle/interface'



export const PokemonBattle = (props: any) => {
    const dispatch = useDispatch()
    const [pokemonBattleState, setPokemonBattleState] = useState<IPokemonBattleState>({
        yourPokemon: null,
        computerPokemon: null,
    })

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
                <PokemonChoose
                    chooseType='you'
                    pokemonBattleState={pokemonBattleState}
                    setPokemonBattleState={setPokemonBattleState}
                />
            </Content>
        </Container>
    )
}
