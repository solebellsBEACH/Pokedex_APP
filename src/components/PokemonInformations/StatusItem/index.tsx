import React from "react"
import { Container, Name, Content, Value } from "./styles"
import * as Progress from 'react-native-progress';
import { usePokemonColors } from "../../../utils/hooks";
import { IPossiblePokemonKeys } from "../../../utils/interfaces";


interface IStatusItemProps {
    name: string;
    score: number;
    type: IPossiblePokemonKeys
}

export const StatusItem = ({ name, score, type }: IStatusItemProps) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Content>
                <Value>{score}</Value>
                <Progress.Pie progress={score * 0.01} size={50} color={usePokemonColors(type).primary} />
            </Content>
        </Container>
    )
}
