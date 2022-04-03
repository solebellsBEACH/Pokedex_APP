import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomeScreenSlice from './reducers/homeReducer'

const rootReducer = combineReducers({
    homeScreen: HomeScreenSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
})

export default store;