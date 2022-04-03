import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { ExitIcon as ExitIconSVG } from '../../assets'

export const Container = styled.View`
flex:1;
padding: 15% ${RFValue(20)}px 0  ${RFValue(20)}px;
`
export const ContentTop = styled.View`
width:100% ;
flex-direction:row;
align-items:center;
`
export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.Bold};
font-size: ${RFValue(23)}px;
color: ${({ theme }) => theme.colors.gray6};
`
export const ClearFilterText = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size: ${RFValue(11)}px;
margin: ${RFValue(8)}px 0 0 ${RFValue(20)}px;
color: ${({ theme }) => theme.colors.blue3};
text-decoration: underline;
`

export const ExitIcon = styled(ExitIconSVG)``

export const ExitIconContainer = styled.TouchableOpacity`
top:${RFValue(11)}px;
position:absolute;
right:0;
`

export const Content = styled.View`
margin-top:${RFValue(50)}px;
width:100% ;
min-height:${RFValue(200)}px;

`
export const ContentTitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size: ${RFValue(20)}px;
color: ${({ theme }) => theme.colors.gray6};
`
export const ContentTypes = styled.View`
margin-top:${RFValue(20)}px;
width:100% ;

min-height:${RFValue(100)}px;
`