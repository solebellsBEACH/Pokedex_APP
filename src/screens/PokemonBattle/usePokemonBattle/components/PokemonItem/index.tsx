import React from 'react'
import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgUri } from 'react-native-svg'
import { DefaultButton } from '../../../../../components'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks'
import { IPokemonItem } from '../../interface'
import { Container, Content, PokemonImage, ContentRight, Title, InformationName, InformationContainer, InformationValue } from './styles'
import Toast from 'react-native-toast-message';

export const PokemonItem = ({
    pokemon,
    pokemonBattleState,
    setPokemonBattleState,
    chooseType
}: IPokemonItem) => {


    const Information = ({ name, value }: { name: string, value: string }) => {
        return <InformationContainer>
            <InformationName>{name}: </InformationName>
            <InformationValue>{value}</InformationValue>
        </InformationContainer>
    }

    const { name, type, height, front_default } = pokemon
    const handlePress = () => {
        if (chooseType == 'you') setPokemonBattleState({ ...pokemonBattleState, yourPokemon: pokemon })
        else {
            if (pokemon.name == pokemonBattleState?.yourPokemon?.name) {
                Toast.show({
                    type: 'error',
                    text1: 'Ops',
                    text2: 'Esse pokemon já foi escolhido 🚨'
                });
            } else setPokemonBattleState({ ...pokemonBattleState, computerPokemon: pokemon })
        }
    }
    return (
        <Container>
            <Content
                color={type != null ? usePokemonColors({ pokemonType: type }).primary : 'blue'}
            >
                <ContentRight>

                    <Title>{useCapitalizeFirstLetter(name)}</Title>
                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        <Information
                            value={useCapitalizeFirstLetter(type.toString())}
                            name={'Type'}
                        />
                        <Information
                            value={height + ''}
                            name={'Height'}
                        />
                    </View>
                    <DefaultButton label='Escolher' handlePress={handlePress} />
                </ContentRight>
                <PokemonImage
                    height={RFValue(110) + ''}
                    width={RFValue(110) + ''}
                    uri={front_default}
                />
            </Content>
        </Container>
    )
}