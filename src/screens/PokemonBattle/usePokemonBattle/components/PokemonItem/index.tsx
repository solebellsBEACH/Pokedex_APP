import React from 'react'
import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgUri } from 'react-native-svg'
import { DefaultButton } from '../../../../../components'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks'
import { IPokemonItem } from '../../interface'
import { Container, Content, PokemonImage, ContentRight, Title, InformationName, InformationContainer, InformationValue } from './styles'

export const PokemonItem = ({ name, type, height }: IPokemonItem) => {

    const Information = ({ name, value }: { name: string, value: string }) => {
        return <InformationContainer>
            <InformationName>{name}: </InformationName>
            <InformationValue>{value}</InformationValue>
        </InformationContainer>
    }

    return (
        <Container>
            <Content
                 color={type != null ? usePokemonColors({ pokemonType: type }).primary : 'blue'} 
            >
                <ContentRight>

                    <Title>Pokemon</Title>
                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        <Information
                            value={type}
                            name={'Type'}
                        />
                        <Information
                            value={height + ''}
                            name={'Height'}
                        />
                    </View>
                    <DefaultButton label='Escolher' handlePress={() => { }} />
                </ContentRight>
                <PokemonImage
                    height={RFValue(110) + ''}
                    uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
                />
            </Content>
        </Container>
    )
}