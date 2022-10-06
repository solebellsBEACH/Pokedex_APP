import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainer {
    readonly color: string
}

export const Container = styled.TouchableOpacity<IContainer>`
height:${RFValue(45)}px ;
width:100% ;
border-radius:${RFValue(10)}px;
background-color:${props => props.color};
display:flex;
justify-content:center;
align-items:center;

margin-top:${RFValue(20)}px;

`
export const Label = styled.Text`
font-family: ${({ theme }) => theme.fonts.ExtraBold};
color: ${({ theme }) => theme.colors.white};
` 