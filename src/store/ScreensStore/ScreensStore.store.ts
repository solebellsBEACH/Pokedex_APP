import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { AppDispatch, AppThunk, RootState } from ".."
import { api } from "../../utils/api"
import { IPokemonRequest, IPokemonTypeRequest } from "../../utils/interfaces"


export type IScreenStore = {
    typesRequest: IPokemonTypeRequest,
    typesRequestLoaded: boolean,
    pokemonsRequest: IPokemonRequest,
    pokemonsRequestLoaded: boolean,
    loading: boolean,
    error: boolean,
    offset: number;
}

const initialState: IScreenStore = {
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
    offset: 0
}

const ScreensSlice = createSlice({
    name: "ScreensSlice",
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
        actionSetOffsetCres(state) {

            state.offset = state.offset + 1;
        },
    }
})
export const { actionSetTypes, actionSetPokemons, actionSetOffsetCres } = ScreensSlice.actions;
export default ScreensSlice.reducer;

export function asyncGetTypes(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get('type');
            dispatch(actionSetTypes({ count: data.count, results: data.results }));
        } catch (error) {

        }
    }
}

export function asyncGetPokemons(offset: number): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get(`pokemon/?offset=0&limit=${(offset * 10) + 10}`);
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