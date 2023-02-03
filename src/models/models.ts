import React from "react";
import WarningModal from "../components/constructorComponents/WarningModal";


export enum TestTypes {
    single = "single",
    multiple = "multiple"
}

export interface IAnswerOption {
    id: number,
    text: string,
    isRight: boolean,
    isChecked: boolean,
}

export interface ITest {
    id: number,
    text: string,
    weight: number,
    answerOptions: IAnswerOption[],
    isPassed: boolean,
    isFailed: boolean,
    typeOfTest: string,
}

export interface ICheckingPayload{
    testId: number,
    answerOptionsId: number
}

export interface IConfirmingPayload{
    testId: number,
}

export interface  ITestsList {
    tests: ITest[]
}

export interface ITestProps {
    test: ITest,
    index: number,
}

export interface IOptionProps {
    option: IAnswerOption,
    test: ITest,
}

export interface IResults {
    enough: number,
}

export interface IModalWindowProps {
    isHidden: boolean,
    children?: React.ReactNode,
    hide:(arg1: boolean)=>void
}

export interface IEditTestProps {
    test: ITest,
    index: number,
    setModalHidden: (arg1: boolean)=>void,
}

export interface IEditOptionProps {
    test: ITest,
    option: IAnswerOption,
    setCurrentOptions: (arg1: IAnswerOption[])=>void;
    index: number,
    changedOptions: IAnswerOption[]
}

export interface  IEditTestPayload {
    test: ITest,
    index: number
}

export  interface IWarningModalProps {
    text: string,
    setWarningModalHidden: (arg1: boolean) => void
}
