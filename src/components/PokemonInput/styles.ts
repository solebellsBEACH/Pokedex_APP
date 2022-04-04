import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TextInput`
width:${RFValue(320)}px;
height:${RFValue(50)}px;
border-radius: ${RFValue(30)}px;
background:${({ theme }) => theme.colors.gray2};

text-align:center;
align-items:center;

font-family: ${({ theme }) => theme.fonts.Regular};
font-size:${RFValue(14)}px;
color:${({ theme }) => theme.colors.gray5};

`
