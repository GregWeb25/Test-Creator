import React from 'react';
import {ITest, TestTypes} from "../../models/models";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import SingleTest from "./SingleTestComponents/SingleTest";
import MultipleTest from "./MultipleTestComponents/MultipleTest";

const TestsList = () => {
    const tests = useSelector((state: RootState )=> state.tests.tests);
    return (
        <div className="flex flex-col items-center  pt-10  w-full text-gray-800 font-medium gap-2">
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
                    break;
                }
            })}

        </div>
    );
};

export default TestsList;