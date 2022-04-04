import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { ArrowLeftIcon as ArrowLeftIconSVG } from '../../assets/index'

export const Container = styled.View`
flex: 1;
padding:${RFValue(60)}px ${RFValue(25)}px ${RFValue(30)}px ${RFValue(25)}px;;
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
export const CategoriesContainer = styled.View`
margin:${RFValue(5)}px ${RFValue(2)}px;
flex-direction: row;
`
export const CategoriesFlatList = styled.FlatList`
margin-top: ${RFValue(5)}px;
margin-left:${RFValue(-5)}px;
`

export const CategoryItem = styled.View`

background-color: ${({ theme }) => theme.colors.blue3};
padding:${RFValue(2)}px ${RFValue(15)}px;
border-radius:${RFValue(15)}px;
justify-content:center;
height:${RFValue(30)}px;
`
export const CategoryText = styled.Text`
font-family: ${({ theme }) => theme.fonts.Regular};
font-size: ${RFValue(14)}px;
color: ${({ theme }) => theme.colors.white};
`