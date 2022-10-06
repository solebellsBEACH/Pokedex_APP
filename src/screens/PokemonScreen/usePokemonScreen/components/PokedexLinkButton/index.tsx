import React from 'react'
import { Linking } from 'react-native'
import { usePokemonColors } from '../../../../../utils/hooks'
import { IPokemon } from '../../../../../utils/interfaces'
import { Container, Label } from './style'

interface IPokedexLinkButtonProps {
    _id: string
    pokemon:IPokemon
}

export const PokedexLinkButton = ({ _id , pokemon}: IPokedexLinkButtonProps) => {
    return (
        <Container
        color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'} 
        onPress={() => { 
            Linking.openURL(`https://pokedex-web-application.herokuapp.com/Pokemon?id=${_id}`); 
          }}
        >
            <Label
            
            >Ver página oficial</Label>
        </Container>
    )
}