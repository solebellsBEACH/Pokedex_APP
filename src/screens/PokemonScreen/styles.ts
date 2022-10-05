import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { ArrowLeftIcon as ArrowLeftIconSVG } from '../../assets/index'

export const Container = styled.View`
width:auto;
padding:${RFValue(60)}px ${RFValue(25)}px ${RFValue(25)}px ${RFValue(25)}px;
`
export const ArrowLeftIcon = styled(ArrowLeftIconSVG)`
`
export const ContentTop = styled.View`
width:100%;
min-height:${RFValue(70)}px;
margin-top:${RFValue(15)}px;
flex-direction:row;
justify-content:space-between;
`;
export const ContentLeft = styled.View`
`;
export const ContentRight = styled.View`
`;

export const PokemonName = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
font-size: ${RFValue(23)}px;
color: ${({ theme }) => theme.colors.gray6};
`
export const PokemonNumber = styled(PokemonName)`
font-size: ${RFValue(18)}px;
margin-top: ${RFValue(4)}px;


`

export const CategoriesFlatList = styled.FlatList`
margin-top: ${RFValue(5)}px;
margin-left:${RFValue(-5)}px;
`

export const ContentBottom = styled.View`
margin-top:${RFValue(10)}px;
width:100%;
min-height:${RFValue(10)}px;
margin-bottom:${RFValue(0)}px;

`

export const PokemonImage = styled.Image`
background:red;
width:100px ;
height:100px ;
/* top:${RFValue(-45)}px;
position: absolute; */
`