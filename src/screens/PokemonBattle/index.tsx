import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, HeadLogo, Content } from './styles'
import { PokemonChoose, SwordComponent } from './usePokemonBattle/components'
import { Creators as HomeActions } from '../../store/ducks/home'
import { INavigationProps, IPokemon } from '../../utils/interfaces'
import { IPokemonBattleState } from './usePokemonBattle/interface'
import { DefaultButton } from '../../components'
import theme from '../../global/theme';
import { readyForFight } from './handle'
import { useNavigation } from '@react-navigation/native'

export const PokemonBattle = (props: any) => {
    const dispatch = useDispatch()
    const [swordIsOpen, setSwordIsOpen] = useState(false)
    const [pokemonBattleState, setPokemonBattleState] = useState<IPokemonBattleState>({
        yourPokemon: null,
        computerPokemon: null,
    })
    const navigation = useNavigation<INavigationProps>()

    useEffect(() => {
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20
        }))
    }, [props])

    const handlePress = async () => {
        setSwordIsOpen(true)
        setTimeout(() => {
            setSwordIsOpen(false)
            navigation.navigate('BattleScreen')
        }, 2800);

    }

    return (
        <Container>
            <HeadLogo
                height={120}
                source={require('../../assets/pokemon_battle.png')} />
            <Content>
                {swordIsOpen ?
                    <SwordComponent size={400} /> :
                    <>
                        <PokemonChoose
                            chooseType='you'
                            pokemonBattleState={pokemonBattleState}
                            setPokemonBattleState={setPokemonBattleState}
                        />
                        {pokemonBattleState.yourPokemon !== null && <PokemonChoose
                            chooseType='computer'
                            pokemonBattleState={pokemonBattleState}
                            setPokemonBattleState={setPokemonBattleState}
                        />}
                        {readyForFight(
                            {
                                you: pokemonBattleState.yourPokemon,
                                computer: pokemonBattleState.computerPokemon
                            }) &&
                            <DefaultButton
                                label="Go to PokemonBattle"
                                handlePress={handlePress}
                                height='80px'
                                color={theme.colors.black}
                            />}

                    </>
                }

            </Content>
        </Container>
    )
}
