import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IContainer {
    size: number
}

export const Container = styled.View<IContainer>`
width:${props => RFValue(props.size)}px ;
height:${props => RFValue(props.size)}px ;` 