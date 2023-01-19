import React from 'react';
import {IAnswerOption, ITestProps, TestTypes} from "../../../models/models";
import {useAppDispatch} from "../../../store/appDispatch";
import SingleOption from "./SingleOption";

const SingleTest = ({test, index}: ITestProps) => {
    return (
        <div className={test.isPassed ? "bg-green-300" : "bg-white"}>
            <div>
                {index + 1}.<span className="ml-1">{test.text}</span> <br/>
                {test.weight} points are given for this task
            </div>
            <div className="px-2 pt-1">
                {test.answerOptions && test.answerOptions?.map((option: IAnswerOption, i: number) => {
                    return (
                        <SingleOption test={test} option={option} key={Date.now() + option.id}/>
                    );
                })}
            </div>
        </div>
    );
};

export default SingleTest;