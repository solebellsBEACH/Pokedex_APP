import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
 
export const Container = styled.View`
flex:1;
display: flex;
align-items: center;
background:${({ theme }) => theme.colors.white};
align-items:center;
padding:${RFValue(10)}px ${RFValue(20)}px;
`

export const HeadLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(250)}px;
margin-top:${RFValue(20)}px;
`

export const Content = styled.View``