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

export const Content = styled.View`
display: flex;
width:100% ;
justify-content:center;
align-items:center;
margin-bottom:${RFValue(10)}px;
`

export const LoseLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(150)}px;
margin-top:${RFValue(-25)}px;
margin-bottom:${RFValue(-20)}px;
margin-left:${RFValue(-150)}px;
`

export const WinLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(150)}px;
margin-top:${RFValue(-25)}px;
margin-bottom:${RFValue(-20)}px;
margin-left:${RFValue(-150)}px;
`
export const GoallessLogo = styled.Image`
resize-mode:contain;
width: ${RFValue(250)}px;
margin-top:${RFValue(-25)}px;
margin-bottom:${RFValue(-20)}px;
margin-left:${RFValue(-80)}px;
`
