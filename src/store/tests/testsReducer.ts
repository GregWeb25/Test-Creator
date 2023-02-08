import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICheckingPayload, IConfirmingPayload, IEditTestPayload, ITest, TestTypes} from "../../models/models";
import setAllAction from "./actions/setAllAction";
import addAction from "./actions/addAction";
import deleteAction from "./actions/deleteAction";
import editAction from "./actions/editAction";
import checkingAction from "./actions/checkingAction";
import confirmingAction from "./actions/confirmingAction";

export type TestState = ReturnType<typeof testsSlice.getInitialState >

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
        setAllTests(state, action: PayloadAction<ITest[]>){
            setAllAction(state, action);
        },
        addTest(state, action: PayloadAction<ITest>) {
            addAction(state, action);
        },
        deleteTest(state, action: PayloadAction<number>){
            deleteAction(state, action);
        },
        editTest(state, action: PayloadAction<IEditTestPayload>) {
            editAction(state, action);
        },
        checking(state, action: PayloadAction<ICheckingPayload>) {
            checkingAction(state, action);
        },
        confirming(state, action: PayloadAction<IConfirmingPayload>) {
            confirmingAction(state, action);
        }

    }

});

export  const {checking, confirming, addTest, editTest, deleteTest, setAllTests} = testsSlice.actions;
export default testsSlice.reducer;