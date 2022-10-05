import { ActivityIndicator } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import { SvgUri } from 'react-native-svg'
import { usePokemonColors } from '../../../../../utils/hooks'
import { IPokemon } from '../../../../../utils/interfaces'
import {
    PokemonItemContent,
    PokemonItemContainer,
} from './styles'

interface IPokemonItemProps{
    pokemon:IPokemon
}

export const PokemonItem = ({pokemon}:IPokemonItemProps) => {
    return <PokemonItemContainer
    >
        <PokemonItemContent
            colors={pokemon != null ? [usePokemonColors({ pokemonType: pokemon.type }).primary, usePokemonColors({ pokemonType: pokemon.type }).secondary] : ['gray', 'white']}
        >
            {pokemon != null ? <SvgUri
                height={RFValue(170) + ''}
                uri={pokemon.front_default}
            /> : <ActivityIndicator size={80} color='black' />}
        </PokemonItemContent>
    </PokemonItemContainer>
}