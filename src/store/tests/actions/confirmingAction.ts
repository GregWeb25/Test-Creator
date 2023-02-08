import {TestState} from "../testsReducer";
import {PayloadAction} from "@reduxjs/toolkit";
import {IConfirmingPayload, TestTypes} from "../../../models/models";

const confirmTest = (state: TestState, action: PayloadAction<IConfirmingPayload>) => {
    let testPath = state.tests.find(test => test.id === action.payload.testId);
    let checkedRightOptionsCount = 0;
    let rightOptionsCount = 0;
    let wrongOptions = false;
    switch (testPath!.typeOfTest){
        case TestTypes.single: rightOptionsCount = 1;
            break;
        case TestTypes.multiple:
            testPath!.answerOptions.map(answer => {
                if(answer.isRight){
                    rightOptionsCount++;
                }
            });
    }
    testPath!.answerOptions.map(answer => {
        if(answer.isRight && answer.isChecked){
            checkedRightOptionsCount++;
        }
    });
    testPath!.answerOptions.map(answer => {
        if(!answer.isRight && answer.isChecked){
            wrongOptions = true;
        }
    });

    if(checkedRightOptionsCount === rightOptionsCount && !wrongOptions){
        testPath!.isFailed = false;
        testPath!.isPassed = true;
    } else {
        testPath!.isPassed = false;
        testPath!.isFailed = true;
    }


}

export default confirmTest;