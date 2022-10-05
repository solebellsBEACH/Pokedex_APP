import styled from "styled-components/native";
import { TextInput, Button } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";


export const DefaultText = styled.Text`
font-family: ${({ theme }) => theme.fonts.Regular};
`

export const StyledTextInput = styled(TextInput)`
height:${RFValue(55)}px;
margin:${RFValue(15)}px 0;
background:${({ theme }) => theme.colors.gray1};
`

export const StyledButton = styled(Button)`
justify-content:center;
background:${({ theme }) => theme.colors.blue1};
height:${RFValue(55)}px;
text-transform:none;
`

export const TextButton = styled.Text`
color:${({ theme }) => theme.colors.white};
text-transform:none;
font-family: ${({ theme }) => theme.fonts.Bold};
font-size:${RFValue(15)}px;
` 