import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
width:100% ;
height:100% ;
`

export const AbilityItemContainer = styled.View`
width:100% ;
height:auto;
margin-bottom:${RFValue(5)}px;
`

export const AbilityItemText = styled.Text`
margin-bottom:${RFValue(10)}px;
font-size:${RFValue(20)}px;
font-weight:bold;
`