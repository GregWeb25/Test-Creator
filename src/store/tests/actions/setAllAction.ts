import {PayloadAction} from "@reduxjs/toolkit";
import {ITest} from "../../../models/models";
import {TestState} from "../testsReducer";

const setAllAction = (state: TestState, action: PayloadAction<ITest[]>) => {
    state.tests = action.payload;
}

export default setAllAction;