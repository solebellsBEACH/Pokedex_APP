import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width:45%;
height:${RFValue(100)}px;
background-color:${({ theme }) => theme.colors.gray2};
border-width:${RFValue(1)}px;
border-color:${({ theme }) => theme.colors.gray3};
margin:${RFValue(10)}px 0;
border-radius:${RFValue(5)}px;
padding:${RFValue(5)}px;
align-items:center;
`
export const Name = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
font-size: ${RFValue(14)}px;
`
export const Value = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
color: ${({ theme }) => theme.colors.gray6};
font-size: ${RFValue(25)}px;
`
export const Content = styled.View`
margin-top:${RFValue(10)}px;
width:80%;
flex-direction:row;
align-items:center;
justify-content:space-between;
`