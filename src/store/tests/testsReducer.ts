import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICheckingPayload, ITest, TestTypes} from "../../models/models";

const tests: ITest[] = [
    {
    id: 0,
    text: "Choose the correct calculation result: 1 + 1 = ...",
    weight: 100,
    typeOfTest: TestTypes.single,
    answerOptions: [
        {
            id: 0,
            text: "2",
            isRight: true,
            isChecked: false,
        },
        {
            id: 1,
            text: "3",
            isRight: false,
            isChecked: false,
        }
    ],
    isPassed: false,
    isFailed: false,
},
    {
    id: 123,
    text: "Choose the correct calculation result: |25| = ...",
    weight: 100,
    typeOfTest: TestTypes.multiple,
    answerOptions: [
        {
            id: 0,
            text: "5",
            isRight: true,
            isChecked: false,
        },
        {
            id: 1,
            text: "25",
            isRight: false,
            isChecked: false,
        },
        {
            id: 2,
            text: "-25",
            isRight: true,
            isChecked: false,
        }
    ],
    isPassed: false,
    isFailed: false,
},
]

const initialTest = {tests}

const testsSlice = createSlice({
    name: "tests",
    initialState: initialTest,
    reducers: {
        checking(state, action: PayloadAction<ICheckingPayload>) {
            let testPath = state.tests.find(test => test.id === action.payload.testId);
            let optionPath = testPath?.answerOptions.find(answer => answer.id === action.payload.answerOptionsId);
            let isChecked = optionPath?.isChecked;

           optionPath!.isChecked = !isChecked;
            if(testPath?.typeOfTest === TestTypes.single) {
                testPath!.answerOptions.find(answer => answer.id !== action.payload.answerOptionsId)!.isChecked = false;
                if(optionPath?.isRight === true){
                    testPath!.isPassed = true;
                } else testPath!.isPassed = false;
            }
        }

    }

});

export  const {checking} = testsSlice.actions;
export default testsSlice.reducer;