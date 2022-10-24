import { RFValue } from "react-native-responsive-fontsize";
import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled.View``

interface IContentProps {
    readonly color: string
}

export const Content = styled.View<IContentProps>`
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
export const YouLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(60)}px;
height: ${RFValue(59)}px;
margin-top:${RFValue(15)}px;
`

export const ComputerLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(140)}px;
height: ${RFValue(59)}px;
margin-top:${RFValue(15)}px;
`