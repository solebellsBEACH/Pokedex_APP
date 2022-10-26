import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Container, Icon, Title } from './style'

export const BattleTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container>
            <Title
            focused={focused}
            >Battle</Title>
        </Container>
    )
}