import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { TextInput } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { BackgroundLogIn } from '../../assets'
import { StyledButton, StyledTextInput, TextButton } from '../../global/styles'
import theme from '../../global/theme'
import { INavigationProps } from '../../utils/interfaces'

import { Container, LogoPokemon, BackgroundImage, Title, Description } from './styles'

export const LogIn = () => {
    const navigation = useNavigation<INavigationProps>();

    const renderForm = () => {
        const [isVisible, setIsVisible] = useState(true)

        return <>
            <StyledTextInput
                autoComplete={false}
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Email"
            />
            <StyledTextInput
                autoComplete={false}
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Senha"
                secureTextEntry={isVisible}
                right={
                    <TextInput.Icon
                        onPressIn={() => { setIsVisible(false) }}
                        onPressOut={() => { setIsVisible(true) }}
                        color={theme.colors.gray5}
                        name="eye"
                    />
                }
            />
        </>
    }

    const handleLogin = async () => {
        navigation.navigate('Home')
        // if (screensStoreState.typesRequestLoaded) {
        //     navigation.navigate('Home')
        // }
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
                {
                    true ?
                        <StyledButton
                            style={{ marginTop: RFValue(30) }}
                            mode="contained" onPress={handleLogin}>
                            <TextButton>Login</TextButton>
                        </StyledButton> :
                        <ActivityIndicator
                            style={{ marginTop: '10%' }} size={50} color='black'
                        />
                }
            </Container>
        </BackgroundImage>
    )
}