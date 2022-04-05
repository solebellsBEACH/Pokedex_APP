import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.FlatList`
width:100% ;
min-height: ${RFValue(50)}px;
margin-bottom:${RFValue(20)}px;
`

// ITEM STYLES

export const ItemContainer = styled.View`
margin:${RFValue(3)}px ${RFValue(2)}px;
flex-direction: row;
`

export const ItemContent = styled.View`
background-color: ${({ theme }) => theme.colors.gray2};
padding:${RFValue(1)}px ${RFValue(15)}px;
border-radius:${RFValue(15)}px;
justify-content:space-between;
align-items:center;
height:${RFValue(30)}px;
flex-direction: row;
`
export const ItemText = styled.Text`
font-family: ${({ theme }) => theme.fonts.Regular};
font-size: ${RFValue(13)}px;
color: ${({ theme }) => theme.colors.gray6};
margin-right:${RFValue(5)}px;
`
