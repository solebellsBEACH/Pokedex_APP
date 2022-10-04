import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { AppDispatch, AppThunk, RootState } from ".."
import { api } from "../../utils/api"
import { IPokemonRequest, IPokemonTypeRequest } from "../../utils/interfaces"


export type IHomeStore = {
    loading: boolean,
    error: boolean,
    pokemons: IPokemonRequest | null,
    success: boolean
}

const initialState: IHomeStore = {
    loading: false,
    error: false,
    pokemons: null,
    success: false
}

const HomesSlice = createSlice({
    name: "HomesSlice",
    initialState: initialState,
    reducers: {
        actionSetPokemons(state, payload: { payload: { data: IPokemonRequest | null, success: boolean } }) {
            state.pokemons = payload.payload.data;
            state.success = payload.payload.success;
            state.error = !payload.payload.success;
            state.loading = false;
        }
    }
})
export const { actionSetPokemons } = HomesSlice.actions;
export default HomesSlice.reducer;

export function asyncGetPokemons(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get(`pokemon`);
            dispatch(actionSetPokemons({
                count: data.count,
                results: data.results,
                next: data.next,
                previous: data.previous
            }));
        } catch (error) {
        }
    }
}