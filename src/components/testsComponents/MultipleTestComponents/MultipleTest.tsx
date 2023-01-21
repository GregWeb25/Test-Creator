import React from 'react';
import {IAnswerOption, ITestProps} from "../../../models/models";
import MultipleOption from "./MultipleOption";
import {confirming} from "../../../store/tests/testsReducer";
import {useAppDispatch} from "../../../store/appDispatch";

const MultipleTest = ({test,  index}:ITestProps) => {
    const dispatch = useAppDispatch();
    let classes = "bg-white w-[80%] py-1 px-2";
    const failedClasses = " bg-red-300";
    const successClasses = " bg-green-400";
    if(test.isPassed) classes = classes + successClasses;
    if(test.isFailed) classes = classes + failedClasses;
    return (
        <div className={classes}>
            <div className="flex">
                <div>
                    {index + 1}.
                </div>
                <div>
                    <span className="ml-1">{test.text}</span> <br/>
                    <span className="font-normal text-gray-600">Type: {test.typeOfTest}</span>
                </div>
            </div>
            <div className="px-4 pt-1">
                {test.answerOptions && test.answerOptions?.map((option: IAnswerOption, i: number) => {
                    return (
                        <MultipleOption test={test} option={option} key={Date.now() + option.id}/>
                    );
                })}
            </div>
            <div className="flex justify-between items-end mt-2">
                <span className="pl-2 h-min font-normal text-gray-600">
                    {test.weight} points are given for this task
                </span>
                <button
                    onClick={()=>dispatch(confirming({testId: test.id}))}
                    className="bg-blue-500 px-2 py-1  text-white font-bold mb-1"
                >{test.isPassed ? "Passed" : test.isFailed ? "Failed" : "Confirm"}</button>
            </div>
        </div>
    );
};

export default MultipleTest;