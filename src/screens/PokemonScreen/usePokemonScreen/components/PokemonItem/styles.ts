import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { LinearGradient } from 'expo-linear-gradient';

export const PokemonItemContainer = styled.View`
align-items:center;
width: 100%;
height: ${RFValue(200)}px;
`
export const PokemonItemContent = styled(LinearGradient)`
bottom:0;
position:absolute;
width:100%;
height: ${RFValue(195)}px;
border-radius:${RFValue(20)}px;
background-color:${({ theme }) => theme.colors.blue3};
align-items:center;
justify-content:center;
`