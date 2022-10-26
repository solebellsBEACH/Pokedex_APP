import { RFValue } from "react-native-responsive-fontsize";
import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";

export const Container = styled.View`
width:100% ;
display:flex;
justify-content:center;
align-items:center;

`

export const PokemonImage = styled(SvgUri)`
`
export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
font-size: ${RFValue(23)}px;
color: ${({ theme }) => theme.colors.gray6};
`
export const Content = styled.View`
width:100% ;
display:flex;
/* justify-content:center;
align-items:center; */

`