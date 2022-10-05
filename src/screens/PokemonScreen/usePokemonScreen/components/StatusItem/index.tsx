import React from "react"
import { Container, Name, Content, Value } from "./styles"
import * as Progress from 'react-native-progress';
import { IPossiblePokemonKeys } from "../../../../../utils/interfaces";
import { useCapitalizeFirstLetter, usePokemonColors } from "../../../../../utils/hooks";



interface IStatusItemProps {
    name: string;
    score: number;
    type: IPossiblePokemonKeys
}

export const StatusItem = ({ name, score, type }: IStatusItemProps) => {
    return (
        <Container key={name}>
            <Name>{useCapitalizeFirstLetter(name)}</Name>
            <Content>
                <Value>{score}</Value>
                <Progress.Pie
                    progress={score * 0.01} size={50} color={usePokemonColors(type).primary} />
            </Content>
        </Container>
    )
}
