import React from 'react'

import { TouchableOpacity } from 'react-native'
import { Drawer } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer } from './styles'

export const Home = () => {


    return (
        <>
            <Container>
                <LogoPokemon height={RFValue(40)} />
                <ContentTop>
                    <LogoConfigContainer
                        onPress={() => { console.log('PRESSED') }}
                    >
                        <LogoConfig height={RFValue(40)} />
                    </LogoConfigContainer>
                </ContentTop>
            </Container>
        </>
    )
}