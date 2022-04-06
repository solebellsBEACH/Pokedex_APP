import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { LogoPokemon as LogoPokemonSVG, LogoConfig as LogoConfigSVG } from '../../assets'

export const Container = styled.View`
flex:1;
background:${({ theme }) => theme.colors.white};
align-items:center;
padding:${RFValue(10)}px ${RFValue(25)}px;
`
export const LogoConfig = styled(LogoConfigSVG)`
`
export const LogoConfigContainer = styled.TouchableOpacity`
position: absolute;
margin-top: ${RFValue(5)}px;
right:0;
`
export const LogoPokemon = styled(LogoPokemonSVG)`
margin-top:10%;
`
export const ContentTop = styled.View`
margin:${RFValue(20)}px 0 0 0;
width:100%;
height: ${RFValue(50)}px;
`
export const ContentBottom = styled.View`
margin:${RFValue(20)}px 0 0 ${RFValue(-20)}px;
width:100%;

`

export const PokemonItensContent = styled.FlatList`
height: ${RFValue(570)}px;
`