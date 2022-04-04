import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
width:100% ;
height: ${RFValue(280)}px;
padding:0 ${RFValue(12)}px;
`
export const ContentTop = styled.View`
width:100% ;
height: ${RFValue(47)}px;
flex-direction:row;
justify-content:space-between;
border-bottom-width:0.5px ;
border-bottom-color:${({ theme }) => theme.colors.gray2};
`

interface ITabSelectorProps {
    readonly isActive: boolean;
}

export const TabSelectorContainer = styled.TouchableOpacity<ITabSelectorProps>`
width:33.3%;
height:100%;
justify-content:center;
align-items:center;
border-bottom-width:${(props) => props.isActive ? 3 : 0}px;
border-bottom-color:${({ theme }) => theme.colors.red1};
`


export const TabSelectorText = styled.Text<ITabSelectorProps>`
font-family: ${(props) => props.isActive ? props.theme.fonts.Bold : props.theme.fonts.Medium};
font-size:${RFValue(14)}px;
color:${(props) => props.isActive ? props.theme.colors.gray6 : props.theme.colors.gray4};


`