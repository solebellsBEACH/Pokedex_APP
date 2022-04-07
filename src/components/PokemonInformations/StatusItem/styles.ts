import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width:45%;
height:${RFValue(120)}px;
background-color:${({ theme }) => theme.colors.gray1};
border-width:${RFValue(1)}px;
border-color:${({ theme }) => theme.colors.gray2};
margin:${RFValue(10)}px 0;
border-radius:${RFValue(5)}px;
padding:${RFValue(5)}px;
`
export const Name = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
font-size: ${RFValue(14)}px;

`