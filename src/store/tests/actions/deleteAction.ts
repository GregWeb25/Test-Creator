import {PayloadAction} from "@reduxjs/toolkit";
import {TestState} from "../testsReducer";

const deleteTest = (state: TestState, action: PayloadAction<number>) => {
    state.tests = state.tests.filter((test) => test.id === action.payload ? false : true);
}

export default deleteTest;