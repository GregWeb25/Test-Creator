import {PayloadAction} from "@reduxjs/toolkit";
import {TestState} from "../testsReducer";
import {ICheckingPayload, TestTypes} from "../../../models/models";

const checkTest = (state: TestState, action: PayloadAction<ICheckingPayload>) => {
        let testPath = state.tests.find(test => test.id === action.payload.testId);
        let optionPath = testPath?.answerOptions.find(answer => answer.id === action.payload.answerOptionsId);
        let isChecked = optionPath?.isChecked;

        optionPath!.isChecked = !isChecked;
        if(testPath?.typeOfTest === TestTypes.single) {
            testPath!.answerOptions.map(answer => {
                if(answer.id !== action.payload.answerOptionsId){
                    answer.isChecked = false;
                }
            });
        }
    }


export default checkTest;