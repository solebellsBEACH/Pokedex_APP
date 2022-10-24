import { RFValue } from 'react-native-responsive-fontsize'
import { SvgUri } from 'react-native-svg'
import styled from 'styled-components/native'

interface IPokemonItem {
    readonly color: string
}

export const Container = styled.View`
width:100%;
height:${RFValue(130)}px;
margin-bottom: ${RFValue(10)}px;
display:flex;
justify-content:flex-end;
`
export const Content = styled.View<IPokemonItem>`
width:100%;
height:${RFValue(110)}px;
background:${props => props.color};
border-radius:${RFValue(6)}px;
display:flex;
flex-direction:row;
justify-content:flex-end;

`

export const PokemonImage = styled(SvgUri)`
top:-10px;
left:-60px;
position: absolute;
`

export const ContentRight = styled.View`
width:65%;
height:100%;
padding-right:${RFValue(10)}px ;
`

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(19)}px;
color:${(props) => props.theme.colors.white} ;
`
export const InformationName = styled.Text`
font-family: ${({ theme }) => theme.fonts.SemiBold};
font-size:${RFValue(16)}px;
color:${(props) => props.theme.colors.gray6} ;

`
export const InformationValue = styled(InformationName)`
color:${(props) => props.theme.colors.white} ;
`

export const InformationContainer = styled.View`
display:flex;
flex-direction:row;
margin-right: ${RFValue(10)}px;
`