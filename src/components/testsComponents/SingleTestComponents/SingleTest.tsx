import React from 'react';
import {IAnswerOption, ITestProps} from "../../../models/models";
import SingleOption from "./SingleOption";
import TestFooter from "../TestFooter";
import TestContent from "../TestContent";

const SingleTest = ({test, index}: ITestProps) => {

    let classes = "bg-white w-[80%] py-1 px-2";
    const failedClasses = " bg-red-300";
    const successClasses = " bg-green-400";

    if(test.isPassed) classes = classes + successClasses;
    if(test.isFailed) classes = classes + failedClasses;

    return (
        <div className={classes}>
            <TestContent test={test} index={index}/>
            <div className="px-3 pt-1">
                {test.answerOptions && test.answerOptions?.map((option: IAnswerOption, i: number) => {
                    return (
                        <SingleOption test={test} option={option} key={Date.now() + option.id}/>
                    );
                })}
            </div>
            <TestFooter test={test}/>
        </div>
    );
};

export default React.memo( SingleTest);