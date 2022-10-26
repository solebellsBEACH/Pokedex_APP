import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, Logo, Title } from './style'

export const LoginTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container>
            <Logo
             focused={focused}
                height={20}
                source={require('../../../assets/icons/user.png')} />
            <Title
            focused={focused}
            >Login</Title>
        </Container>
    )
}