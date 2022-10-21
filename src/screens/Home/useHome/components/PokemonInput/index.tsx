import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from './styles'
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import { SafeAreaView } from 'react-native'

export const PokemonInput = (props: any) => {
    const [state, setState] = useState<string>('')
    const dispatch = useDispatch()
    
    const onSubmit = (): void => {
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20,
            name:state.toLowerCase()
        }))
    }

    return (
        <Container
            onSubmitEditing={onSubmit}
            value={state}
            onChangeText={e => setState(e)}
            placeholder='Buscar Pokémon'
        >
        </Container>

    )
}