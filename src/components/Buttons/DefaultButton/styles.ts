import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'


export const Container = styled.TouchableOpacity`
width:100% ;
height:${RFValue(42)}px;
margin:${RFValue(6)}px;
border-radius:${RFValue(4)}px;
align-items:center;
justify-content:center;
background:${(props) => props.theme.colors.blue1} ;
`
export const TextButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(14)}px;
color:${(props) => props.theme.colors.white} ;
`
