import React from 'react';
import CustomButton from "../ui/CustomButton";
import {confirming} from "../../store/tests/testsReducer";
import {useAppDispatch} from "../../store/appDispatch";
import {ITestFooterProps} from "../../models/models";

const TestFooter = ({test}:ITestFooterProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className="flex justify-between items-end mt-2">
                <span className="pl-4 pb-2 h-min font-normal text-gray-600">
                    {test.weight} points are given for this task
                </span>
            <CustomButton
                onClick={()=>dispatch(confirming({testId: test.id}))}
                className="mb-1"
            > {test.isPassed ? "Passed" : test.isFailed ? "Failed" : "Confirm"} </CustomButton>
        </div>
    );
};

export default  React.memo(TestFooter);