import {PayloadAction} from "@reduxjs/toolkit";
import {TestState} from "../testsReducer";
import {IEditTestPayload} from "../../../models/models";

const editTest = (state: TestState, action: PayloadAction<IEditTestPayload>) => {
    state.tests[action.payload.index] = action.payload.test;
}

export default editTest;