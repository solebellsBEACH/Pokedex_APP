import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, Logo, Title } from './style'

export const HomeTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container
        focused={focused}
        >
            <Logo
             focused={focused}
                height={20}
                source={require('../../../assets/icons/home.png')} />
            <Title
            focused={focused}
            >Home</Title>
        </Container>
    )
}