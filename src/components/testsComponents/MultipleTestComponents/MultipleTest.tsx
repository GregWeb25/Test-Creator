import React, {useCallback} from 'react';
import {IAnswerOption, ITestProps} from "../../../models/models";
import MultipleOption from "./MultipleOption";
import TestFooter from "../TestFooter";
import TestContent from "../TestContent";

const MultipleTest = ({test,  index}:ITestProps) => {
    let classes = "bg-white w-[80%] py-1 px-2";
    const failedClasses = " bg-red-300";
    const successClasses = " bg-green-400";

    const styleCheck = useCallback(()=>{
        if(test.isPassed) classes = classes + successClasses;
        if(test.isFailed) classes = classes + failedClasses;
    },[test.isPassed, test.isFailed])

    styleCheck();

    return (
        <div className={classes}>
            <TestContent test={test} index={index}/>
            <div className="px-4 pt-1">
                {test.answerOptions && test.answerOptions?.map((option: IAnswerOption, i: number) => {
                    return (
                        <MultipleOption test={test} option={option} key={Date.now() + option.id}/>
                    );
                })}
            </div>
            <TestFooter test={test}/>
        </div>
    );
};

export default  React.memo(MultipleTest);