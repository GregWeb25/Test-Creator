import React from 'react';
import {ITest} from "../../models/models";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import TestsItem from "./TestsItem";

const TestsList = () => {
    const tests = useSelector((state: RootState )=> state.tests.tests);
    return (
        <div className="flex flex-col items-center   w-full text-gray-800 font-medium gap-2">
            {tests && tests.map((test: ITest, index: number) => {
                return(
                    <TestsItem key={Date.now() + test.id} test={test} index={index} />
                )
            })}

        </div>
    );
};

export default  React.memo(TestsList);