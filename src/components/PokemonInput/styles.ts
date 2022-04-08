import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'


const windowWidth = Dimensions.get('window').width;

export const Container = styled.TextInput`
width:${windowWidth * 0.8}px;
height:${RFValue(50)}px;
border-radius: ${RFValue(30)}px;
background:${({ theme }) => theme.colors.gray2};

text-align:center;
align-items:center;

font-family: ${({ theme }) => theme.fonts.Regular};
font-size:${RFValue(14)}px;
color:${({ theme }) => theme.colors.gray5};

`
