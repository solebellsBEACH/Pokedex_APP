import React, { useState } from 'react'
import { Pressable } from 'react-native'

import { TextInput } from 'react-native-paper'
import { BackgroundLogIn } from '../../assets'
import { StyledTextInput } from '../../global/styles'
import theme from '../../global/theme'

import { Container, LogoPokemon, BackgroundImage, Title, Description } from './styles'

export const LogIn = () => {

    const renderForm = () => {
        const [isVisible, setIsVisible] = useState(true)

        return <>
            <StyledTextInput
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Email"
            />
            <StyledTextInput
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Password"
                secureTextEntry={isVisible}
                right={
                    <TextInput.Icon
                        onPressIn={() => { setIsVisible(false) }}
                        onPressOut={() => { setIsVisible(true) }}
                        color={theme.colors.gray6}
                        name="eye"
                    />
                }
            />
        </>
    }

    return (
        <BackgroundImage
            resizeMode="cover"
            source={BackgroundLogIn}
        >
            <LogoPokemon />
            <Container>
                <Title>Bem-vindo</Title>
                <Description>Insira os seus dados para acessar</Description>
                {renderForm()}
            </Container>
        </BackgroundImage>
    )
}