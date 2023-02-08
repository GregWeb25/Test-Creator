import React from 'react';
import {ITestContentProps, TestTypes} from "../../models/models";
import SingleTest from "./SingleTestComponents/SingleTest";
import MultipleTest from "./MultipleTestComponents/MultipleTest";

const TestsItem = ({test, index}: ITestContentProps) => {
    switch (test.typeOfTest) {
        case TestTypes.single:
            return (
                <SingleTest test={test} index={index}/>
            )
        case TestTypes.multiple:
            return (
                <MultipleTest test={test} index={index}/>
            )
        default:
                return (<></>)
    }
};

export default TestsItem;