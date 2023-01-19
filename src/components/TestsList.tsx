import React from 'react';
import {ITest, TestTypes} from "../models/models";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import SingleTest from "./testsComponents/SingleTestComponents/SingleTest";
import MultipleTest from "./testsComponents/MultipleTestComponents/MultipleTest";

const TestsList = () => {
    const tests = useSelector((state: RootState )=> state.testsReducer.tests);
    return (
        <div className="flex flex-col items-center  pt-10  h-screen w-screen">
            {tests && tests.map((test: ITest, index: number) => {
                switch (test.typeOfTest){
                    case TestTypes.single:
                        return (
                            <SingleTest test={test} index={index} key={Date.now()+test.id}/>
                        )
                    break;
                    case TestTypes.multiple:
                        return (
                            <MultipleTest test={test} index={index} key={Date.now()+test.id}/>
                        )
                }
            })}

        </div>
    );
};

export default TestsList;