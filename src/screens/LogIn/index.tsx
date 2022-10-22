import { useNavigation } from '@react-navigation/native'
import React,
{
    useEffect,
    useState
} from 'react'
import { ActivityIndicator } from 'react-native-paper';
import { TextInput } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { BackgroundLogIn } from '../../assets'
import {
    StyledButton,
    StyledTextInput,
    TextButton
} from '../../global/styles'
import theme from '../../global/theme'
import {
    INavigationProps,
    IReduxState
} from '../../utils/interfaces'
import { Creators as HomeActions } from '../../store/ducks/home'
import {
    Container,
    LogoPokemon,
    BackgroundImage,
    Title,
    Description
} from './styles'
import { IUserForm } from './useLogin/interface';
import Toast from 'react-native-toast-message';
import { setAsyncStorageData } from '../../utils/cache';


export const LogIn = () => {
    const navigation = useNavigation<INavigationProps>();
    const [isVisible, setIsVisible] = useState(true)
    const [form, setForm] = useState<IUserForm>({ email: 'log2@gmail.com', password: 'log' })
    const { userLoginError, userLoginData } = useSelector((state: IReduxState) => state.home)

    const dispatch = useDispatch()
    
    useEffect(() => {
        if (userLoginError) Toast.show({
            type: 'error',
            text1: 'Ops',
            text2: 'Ocorreu o erro em seu login 🚨'
        });
        if (userLoginData) {
            setAsyncStorageData('token', userLoginData.token)
            navigation.navigate('Home')
        }
    }, [userLoginError, userLoginData])

    const renderForm = () => {
        return <>
            <StyledTextInput
                onChangeText={e => { setForm({ ...form, email: e }) }}
                autoComplete={false}
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Email"
                defaultValue='log2@gmail.com'
            />
            <StyledTextInput

                onChangeText={e => { setForm({ ...form, password: e }) }}
                autoComplete={false}
                underlineColor={theme.colors.gray6}
                selectionColor={theme.colors.blue2}
                activeUnderlineColor={theme.colors.blue2}
                outlineColor={theme.colors.blue2}
                activeOutlineColor={theme.colors.blue2}
                label="Senha"
                defaultValue='log'
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
        dispatch(HomeActions.loginRequest(form))
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