import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CategoriesContainer = styled.View`
margin:${RFValue(5)}px ${RFValue(2)}px;
flex-direction: row;
`

export const CategoryText = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size: ${RFValue(13)}px;
color: ${({ theme }) => theme.colors.black};


`
interface IPokemonColor {
    readonly color: string;
}

export const CategoryItemContent = styled.View<IPokemonColor>`

background-color: ${(props) => props.color};
padding:${RFValue(1)}px ${RFValue(15)}px;
border-radius:${RFValue(15)}px;
justify-content:center;
height:${RFValue(30)}px;
`
