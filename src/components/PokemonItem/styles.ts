import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { PokemonImage as PokemonImageSVG } from '../../assets'

export const Container = styled.TouchableOpacity`
align-items:center;
width: ${RFValue(145)}px;
height: ${RFValue(120)}px;

margin:0 5%;
`

export const Content = styled.View`
bottom:0;position:absolute;
width: ${RFValue(145)}px;
height: ${RFValue(100)}px;
border-radius:${RFValue(20)}px;
background-color:${({ theme }) => theme.colors.blue3};
align-items:center;
`
export const PokemonName = styled.Text`
font-family: ${({ theme }) => theme.fonts.ExtraBold};
font-size:${RFValue(11)}px;

color:${({ theme }) => theme.colors.white};
background-color:${({ theme }) => theme.colors.gray3};

height: ${RFValue(20)}px;
width: 80%;

position: absolute;
bottom:${RFValue(10)}px;

align-items:center;
text-align:center;

border-radius:${RFValue(10)}px;
`
export const PokemonImage = styled(PokemonImageSVG)`
top:0;
position: absolute;
`