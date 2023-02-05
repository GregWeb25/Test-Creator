import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICheckingPayload, IConfirmingPayload, IEditTestPayload, ITest, TestTypes} from "../../models/models";

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
        },
        {
            id: 2,
            text: "4",
            isRight: false,
            isChecked: false,
        },
    ],
    isPassed: false,
    isFailed: false,
},
    {
    id: 1,
    text: "Choose the correct calculation result: |25| = ...",
    weight: 100,
    typeOfTest: TestTypes.multiple,
    answerOptions: [
        {
            id: 0,
            text: "5",
            isRight: false,
            isChecked: false,
        },
        {
            id: 1,
            text: "25",
            isRight: true,
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
    {
        id: 2,
        text: "What return this expression: \" 0 === false \" ",
        weight: 100,
        typeOfTest: TestTypes.single,
        answerOptions: [
            {
                id: 0,
                text: "false",
                isRight: false,
                isChecked: false,
            },
            {
                id: 1,
                text: "true",
                isRight: true,
                isChecked: false,
            },
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
        addTest(state, action: PayloadAction<ITest>) {
            state.tests = [...state.tests, action.payload]
        },
        deleteTest(state, action: PayloadAction<number>){
            state.tests = state.tests.filter((test) => test.id === action.payload ? false : true);
        },
        editTest(state, action: PayloadAction<IEditTestPayload>) {
            state.tests[action.payload.index] = action.payload.test;
        },
        checking(state, action: PayloadAction<ICheckingPayload>) {
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
        },
        confirming(state, action: PayloadAction<IConfirmingPayload>){
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

    }

});

export  const {checking, confirming, addTest, editTest, deleteTest} = testsSlice.actions;
export default testsSlice.reducer;