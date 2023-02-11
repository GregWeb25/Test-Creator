import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import ConstructorTestItem from "./ConstructorTestItem";

const ConstructorTestList = () => {
    const tests = useSelector((state: RootState) => state.tests.tests);
    return (
        <div className="flex flex-col items-center  pt-10  w-full text-gray-800 font-medium gap-2">
            {tests.map((test, index) => {
                return(
                    <ConstructorTestItem test={test} index={index} key={Date.now()+test.id}/>
                )
            })}
        </div>
    );
};

export default React.memo(ConstructorTestList);