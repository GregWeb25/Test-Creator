import {PayloadAction} from "@reduxjs/toolkit";
import {ITest} from "../../../models/models";
import {TestState} from "../testsReducer";

const addAction = (state: TestState, action: PayloadAction<ITest>) => {
    state.tests = [...state.tests, action.payload]
}

export default addAction;