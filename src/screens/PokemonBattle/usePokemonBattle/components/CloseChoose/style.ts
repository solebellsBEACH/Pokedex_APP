import { RFValue } from "react-native-responsive-fontsize";
import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";

interface IContainerProps {
    readonly color: string
}

export const Container = styled.View<IContainerProps>`
width:100% ;
height:${RFValue(100)}px;
background:${props => props.color};
border-radius:${RFValue(10)}px;
display:flex;
flex-direction:row;
`

export const PokemonImage = styled(SvgUri)`
margin-top:${RFValue(-5)}px;
margin-right:${RFValue(10)}px;
`
export const ContentRight = styled.View``

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(17)}px;
color:${(props) => props.theme.colors.gray6} ;
`