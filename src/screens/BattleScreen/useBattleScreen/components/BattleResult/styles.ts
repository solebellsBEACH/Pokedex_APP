import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
 
export const Container  = styled.View`
background:${({theme})=>theme.colors.gray2};
width:100%;
min-height:${RFValue(400)}px ;
border-radius:${RFValue(20)}px;
`