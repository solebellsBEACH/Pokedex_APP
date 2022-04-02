import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { LogoPokemon as LogoPokemonSVG } from '../../assets'

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    align-items: center;
`
export const LogoPokemon = styled(LogoPokemonSVG)`
top:13%;
`

export const Container = styled.View`
top:18%;
align-items: center;
width:90%;
height:50%;
background:${({ theme }) => theme.colors.white};
border-radius: ${RFValue(8)}px;
padding:${RFValue(30)}px ${RFValue(20)}px;

`