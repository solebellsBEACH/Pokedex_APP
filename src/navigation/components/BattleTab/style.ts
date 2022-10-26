import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { UserIconSVG } from "../../../assets/icons";

export const Container = styled.View`
display:flex;
height:60px ;
justify-content:center;
align-items:center;
`
interface ITitle {
    readonly focused: boolean
}
export const Title = styled.Text<ITitle>`
font-family: ${(props) => props.focused ? props.theme.fonts.ExtraBold : props.theme.fonts.SemiBold};
font-size:${(props) => props.focused ? RFValue(15) : RFValue(14)}px;
color:${(props) => props.focused ? props.theme.colors.gray6 : props.theme.colors.white} ;
`
export const Logo = styled.Image<ITitle>`
resize-mode:contain;
width: ${RFValue(28)}px;
height: ${RFValue(28)}px;
tint-color:${(props) => props.focused ? props.theme.colors.gray6 : props.theme.colors.white} ;
/* position: absolute; */
`