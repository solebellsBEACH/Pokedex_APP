import styled from "styled-components/native";
import { TextInput } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";


export const DefaultText = styled.Text`
font-family: ${({ theme }) => theme.fonts.Regular};
`


export const StyledTextInput = styled(TextInput)`
height:${RFValue(55)}px;
margin:${RFValue(10)}px 0;

background:${({ theme }) => theme.colors.gray1};

/* &:placeholder{

} */

`