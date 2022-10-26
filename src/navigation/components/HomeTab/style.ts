import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { UserIconSVG } from "../../../assets/icons";

export const Container = styled.View<ITitle>`
width:${RFValue(75)}px;
height:${RFValue(75)}px;
margin-bottom:${RFValue(20)}px;
background-color:${(props) => props.focused ? props.theme.colors.blue3 : props.theme.colors.gray5} ;
border-radius:${RFValue(40)}px;
display:flex;
justify-content:center;
align-items:center;
`
export const Icon = styled(UserIconSVG)``
interface ITitle {
    readonly focused: boolean
}
export const Title = styled.Text<ITitle>`
font-family: ${(props) => props.focused ? props.theme.fonts.ExtraBold : props.theme.fonts.SemiBold};
font-size:${(props) => props.focused ? RFValue(15) : RFValue(14)}px;
color:${(props) => props.focused ? props.theme.colors.gray6 : props.theme.colors.white} ;
`