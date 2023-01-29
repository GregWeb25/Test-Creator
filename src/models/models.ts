import React from "react";


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
    typeOfTest: TestTypes,
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