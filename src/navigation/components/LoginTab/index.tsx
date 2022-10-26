import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, Icon, Title } from './style'

export const LoginTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container>
            <Title
            focused={focused}
            >Login</Title>
        </Container>
    )
}