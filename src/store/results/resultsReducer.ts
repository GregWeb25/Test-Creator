import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IResults} from "../../models/models";

const initialState: IResults = {
    enough: 60,
}

export const resultsReducer = createSlice({
    name: "results",
    initialState: initialState,
    reducers: {
        setEnough(state, action: PayloadAction<number>) {
            state.enough = action.payload;
        }
    }
});

export default resultsReducer.reducer;