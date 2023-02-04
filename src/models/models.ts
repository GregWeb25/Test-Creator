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

export  interface  IEditTypeProps {
    currentType: string,
    setCurrentType: (arg1: string) => void
}

export  interface  IEditWeightProps {
    currentWeight: number,
    setCurrentWeight: (arg1: number) => void
}

export  interface  IEditTextProps {
    currentText: string,
    setCurrentText: (arg1: string) => void
}

export  interface  IEditOptionsProps {
    currentOptions: IAnswerOption[],
    setCurrentOptions: (arg1: IAnswerOption[]) => void,
    changedOptions: IAnswerOption[],
    addOption: () => void
}