import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { ArrowLeftIcon as ArrowLeftIconSVG } from '../../assets/index'
import { PokemonImage as PokemonImageSVG } from '../../assets'
import { LinearGradient } from 'expo-linear-gradient';

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
interface IPokemonColor {
    readonly color: string;
}

export const CategoriesContainer = styled.View`
margin:${RFValue(5)}px ${RFValue(2)}px;
flex-direction: row;
`
export const CategoriesFlatList = styled.FlatList`
margin-top: ${RFValue(5)}px;
margin-left:${RFValue(-5)}px;
`

export const CategoryItem = styled.View<IPokemonColor>`

background-color: ${(props) => props.color};
padding:${RFValue(1)}px ${RFValue(15)}px;
border-radius:${RFValue(15)}px;
justify-content:center;
height:${RFValue(30)}px;
`
export const CategoryText = styled.Text`
font-family: ${({ theme }) => theme.fonts.Regular};
font-size: ${RFValue(13)}px;
color: ${({ theme }) => theme.colors.white};
`

export const ContentBottom = styled.View`
margin-top:${RFValue(10)}px;
width:100%;
min-height:${RFValue(10)}px;
margin-bottom:${RFValue(0)}px;

`
export const PokemonItemContainer = styled.View`
align-items:center;
width: 100%;
height: ${RFValue(250)}px;
`
export const PokemonItemContent = styled(LinearGradient)`
bottom:0;
position:absolute;
width:100%;
height: ${RFValue(195)}px;
border-radius:${RFValue(20)}px;
background-color:${({ theme }) => theme.colors.blue3};
align-items:center;
`
export const PokemonImage = styled(PokemonImageSVG)`
top:${RFValue(-45)}px;
position: absolute;
`