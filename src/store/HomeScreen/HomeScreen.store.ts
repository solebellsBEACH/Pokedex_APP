import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch, AppThunk } from ".."
import { api } from "../../utils/api"
import { IPokemonRequest, IPokemonTypeRequest } from "../../utils/interfaces"


export type IHomeScreen = {
    typesRequest: IPokemonTypeRequest,
    typesRequestLoaded: boolean,
    pokemonsRequest: IPokemonRequest,
    pokemonsRequestLoaded: boolean,
    loading: boolean,
    error: boolean,
}

const initialState: IHomeScreen = {
    typesRequest: { count: 0, results: [] },
    loading: true,
    error: false,
    typesRequestLoaded: false,
    pokemonsRequest: {
        count: 0,
        results: [],
        next: null,
        previous: null,
    },
    pokemonsRequestLoaded: false,
}

const HomeScreenSlice = createSlice({
    name: "homeScreenSlice",
    initialState: initialState,
    reducers: {
        actionSetTypes(state, payload) {
            state.typesRequest = payload.payload;
            state.typesRequestLoaded = true;
        },
        actionSetPokemons(state, payload) {
            state.pokemonsRequest = payload.payload;
            state.pokemonsRequestLoaded = true;
        },

    }
})
export const { actionSetTypes, actionSetPokemons } = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;

export function asyncGetTypes(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get('type');
            dispatch(actionSetTypes({ count: data.count, results: data.results }));
        } catch (error) {
            console.log(error)
        }
    }
}

export function asyncGetPokemons(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get('pokemon');
            dispatch(actionSetPokemons({
                count: data.count,
                results: data.results,
                next: data.next,
                previous: data.previous
            }));
        } catch (error) {
            console.log(error)
        }
    }
}