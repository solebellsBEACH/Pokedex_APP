import { createSlice } from '@reduxjs/toolkit'
import { IPokemon } from '../../../utils/interfaces'

interface IHomeSliceInitialState {
  pokemons: IPokemon[] | null
}

const initialState: IHomeSliceInitialState = {
  pokemons: null
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPokemons: state => {
      state.pokemons = []
    },
  }
})

// Action creators are generated for each case reducer function
export const { setPokemons } = homeSlice.actions

export default homeSlice.reducer