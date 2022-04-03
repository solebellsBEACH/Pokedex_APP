import { createSlice } from "@reduxjs/toolkit"
import { IPokemonType } from "../../utils/interfaces"

export type IHomeScreen = {
    types: IPokemonType[],
    loading: boolean,
    error: boolean
}

const initialState: IHomeScreen = {
    types: [],
    loading: false,
    error: false
}

const HomeScreenSlice = createSlice({
    name: "homeScreenSlice",
    initialState: initialState,
    reducers: {}
})

export default HomeScreenSlice.reducer;