import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainerProps {
    width?: string
    height?: string
    color?: string
}

export const Container = styled.TouchableOpacity<IContainerProps>`
width:${props => props.width ? props.width : '100%'} ;
height:${props => props.height ? props.height : RFValue(42) + 'px'};
margin:${RFValue(6)}px;
border-radius:${RFValue(4)}px;
align-items:center;
justify-content:center;
background:${(props) => props.color ? props.color : props.theme.colors.blue1} ;
`
export const TextButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(14)}px;
color:${(props) => props.theme.colors.white} ;
`
