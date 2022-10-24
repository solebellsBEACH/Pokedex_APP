import React from 'react'
import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgUri } from 'react-native-svg'
import { DefaultButton } from '../../../../../components'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks'
import { IPokemonItem } from '../../interface'
import { Container, Content, PokemonImage, ContentRight, Title, InformationName, InformationContainer, InformationValue } from './styles'

export const PokemonItem = ({ name, type, height, frontDefault }: IPokemonItem) => {

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
                    <DefaultButton label='Escolher' handlePress={() => { }} />
                </ContentRight>
                <PokemonImage
                    height={RFValue(110) + ''}
                    width={RFValue(110) + ''}
                    uri={frontDefault}
                />
            </Content>
        </Container>
    )
}