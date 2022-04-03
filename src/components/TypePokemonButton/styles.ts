import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IRadioButton {
    readonly isActive: boolean;
}

export const Container = styled.TouchableOpacity<IRadioButton>`
width:45% ;
height:${RFValue(42)}px;
margin:${RFValue(6)}px;
border-radius:${RFValue(4)}px;
align-items:center;
justify-content:center;
background:${(props) => props.isActive ? props.theme.colors.blue1 : props.theme.colors.gray2} ;
`
export const TextButton = styled.Text<IRadioButton>`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(14)}px;
color:${(props) => props.isActive ? props.theme.colors.white : props.theme.colors.gray5} ;
`
