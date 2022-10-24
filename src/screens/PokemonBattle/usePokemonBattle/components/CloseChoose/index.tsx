import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { DefaultButton } from '../../../../../components'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks'
import { ICloseChooseProps } from '../../interface'
import { Container, PokemonImage, ContentRight, Title } from './style'

export const CloseChoose = ({ pokemon }: ICloseChooseProps) => {


    const handleChangePokemon = () => {

    }

    return (
        <Container
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
        </Container>
    )
}