import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { DefaultButton } from '../../../../../components'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks'
import { ICloseChooseProps } from '../../interface'
import { Container, Content, PokemonImage, ContentRight, Title, YouLogo, ComputerLogo } from './style'

export const CloseChoose = ({ pokemon, chooseType, setPokemonBattleState, pokemonBattleState }: ICloseChooseProps) => {

    const handleChangePokemon = () => {
        if (chooseType == 'you') setPokemonBattleState({ ...pokemonBattleState, yourPokemon: null })
        else setPokemonBattleState({ ...pokemonBattleState, computerPokemon: null })
    }

    const uri = '../../../../../assets/computer_pokemon.png'

    return (
        <Container>
            {chooseType == 'you' ? <YouLogo
                source={require('../../../../../assets/you_pokemon.png')} /> : <></>}
            {chooseType == 'computer' ? <ComputerLogo
                source={require('../../../../../assets/computer_pokemon.png')} /> : <></>}
            <Content
                color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'}
            >
                {pokemon != null ?
                    <>
                        <PokemonImage
                            height={RFValue(110) + ''}
                            width={RFValue(110) + ''}
                            uri={pokemon.front_default}
                        />
                        <ContentRight>
                            <Title>{useCapitalizeFirstLetter(pokemon.name)}</Title>
                            <DefaultButton
                                width={RFValue(200) + 'px'}
                                height={RFValue(50) + 'px'}
                                label='Trocar Pokemon' handlePress={handleChangePokemon} />
                        </ContentRight>
                    </> : <></>
                }
            </Content>
        </Container>
    )
}