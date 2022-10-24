import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Content  = styled.FlatList`
width:100% ;
`
export const Container = styled.View`
/* height:90% ; */
margin-bottom:10%;
`

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(17)}px;
color:${(props) => props.theme.colors.gray6} ;
`