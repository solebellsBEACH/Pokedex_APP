import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`

width:100% ;
height: auto;
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

export const ContentBottom = styled.View`
width:100% ;
height:55%;
padding:${RFValue(25)}px ${RFValue(15)}px ;
`

export const InformationItemContainer = styled.View`
height:${RFValue(25)}px;
width:100%;
margin-bottom:${RFValue(10)}px;
flex-direction:row;
`
export const Label = styled.Text`
width:${RFValue(120)}px ;
margin-right: ${RFValue(25)}px;
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.Bold};
color: ${({ theme }) => theme.colors.gray3};
`
export const Value = styled.Text`
font-size: ${RFValue(13)}px;
font-family: ${({ theme }) => theme.fonts.SemiBold};
color: ${({ theme }) => theme.colors.gray6};
`

export const StatusTabFlatList = styled.FlatList`
width:100% ;
height:100% ;
`
