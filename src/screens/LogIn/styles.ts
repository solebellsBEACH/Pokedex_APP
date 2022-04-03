import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { LogoPokemon as LogoPokemonSVG } from '../../assets'
import { DefaultText } from '../../global/styles'



export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    align-items: center;
`
export const LogoPokemon = styled(LogoPokemonSVG)`
top:13%;
`

export const Container = styled.View`
top:18%;

width:90%;
height:${RFValue(400)}px;
background:${({ theme }) => theme.colors.white};
border-radius: ${RFValue(8)}px;
padding:${RFValue(30)}px ${RFValue(20)}px;

`
export const Title = styled(DefaultText)`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size: ${RFValue(23)}px;
`
export const Description = styled(DefaultText)`
font-family: ${({ theme }) => theme.fonts.Regular};
font-size: ${RFValue(13)}px;
margin-top:${RFValue(8)}px;
margin-bottom:${RFValue(15)}px;
`
