import {combineReducers, configureStore} from "@reduxjs/toolkit";
import testsReducer from "./tests/testsReducer";

const rootReducer = combineReducers({
    testsReducer: testsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
