import {combineReducers, configureStore} from "@reduxjs/toolkit";
import testsReducer from "./tests/testsReducer";
import resultsReducer from "./results/resultsReducer";

const rootReducer = combineReducers({
    tests: testsReducer,
    results: resultsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
