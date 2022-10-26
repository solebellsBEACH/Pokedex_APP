import React from 'react'
import { Container, Title, Logo } from './style'

export const BattleTab = ({ focused }: { focused: boolean }) => {
    return (
        <Container>
            <Logo
             focused={focused}
                height={20}
                source={require('../../../assets/icons/battle.png')} />

            <Title
                focused={focused}
            >Battle</Title>
        </Container>
    )
}