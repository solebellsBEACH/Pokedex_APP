import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch, AppThunk } from ".."
import { api } from "../../utils/api"
import { IPokemonTypeRequest } from "../../utils/interfaces"


export type IHomeScreen = {

    typesRequest: IPokemonTypeRequest,
    typesRequestLoaded: boolean,
    loading: boolean,
    error: boolean,

}

const initialState: IHomeScreen = {
    typesRequest: { count: 0, results: [] },
    loading: true,
    error: false,
    typesRequestLoaded: false,
}

const HomeScreenSlice = createSlice({
    name: "homeScreenSlice",
    initialState: initialState,
    reducers: {
        actionSetTypes(state, payload) {
            state.typesRequest = payload.payload;
            state.typesRequestLoaded = true;
        }
    }
})
export const { actionSetTypes } = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;

export function asyncGetTypes(): AppThunk {
    return async function (dispatch: AppDispatch) {
        try {
            const { data } = await api.get('type');
            dispatch(actionSetTypes({ count: data.count, results: data.results }));
        } catch (error) {
        }
    }
}