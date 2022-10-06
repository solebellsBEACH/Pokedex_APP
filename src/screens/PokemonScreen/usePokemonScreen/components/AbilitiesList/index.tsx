import React from 'react'
import { AbilityItemContainer, AbilityItemText, Container } from './styles'
import { ProgressBar } from 'react-native-paper';
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../../utils/hooks';
import { IPokemon } from '../../../../../utils/interfaces';
import { Text } from 'react-native';

interface IAbilitiesListProps {
    pokemon: IPokemon
}

interface IAbilityItemProps {

    value: number;
    name: string;

}

export const AbilitiesList = ({ pokemon }: IAbilitiesListProps) => {

    const AbilityItem = ({ name, value }: IAbilityItemProps) => {
        return <AbilityItemContainer>
            <AbilityItemText>{useCapitalizeFirstLetter(name)}</AbilityItemText>
            <ProgressBar
                style={{ height: 13, borderRadius: 10 }}
                progress={value * 0.1} color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'} />
        </AbilityItemContainer>
    }

    return <Container>
        {pokemon.abilities.map((item, index) => 
        <AbilityItem
            name={item.name}
            value={item.value}
            key={`key-AbilityItem${index}`}
        />
        )}
    </Container>

}