import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainerProps {
    width?: number
    height?: number
}

export const Container = styled.TouchableOpacity<IContainerProps>`
width:${props => props.width ? props.width : '100%'} ;
height:${props => props.height ? props.height : RFValue(42) + 'px'};
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
