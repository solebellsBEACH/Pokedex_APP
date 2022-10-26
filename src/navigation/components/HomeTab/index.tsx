import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, Icon, Title } from './style'

export const HomeTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container
        focused={focused}
        >
            <Title
            focused={focused}
            >Home</Title>
        </Container>
    )
}