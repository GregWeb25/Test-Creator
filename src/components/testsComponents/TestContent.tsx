import React from 'react';
import {ITestContentProps} from "../../models/models";

const TestContent = ({test, index}: ITestContentProps) => {
    return (
        <div className="flex mb-3">
            <div>
                {index + 1}.
            </div>
            <div>
                <span className="ml-1">{test.text}</span> <br/>
                <span className="font-normal text-gray-600 ml-1">Type: {test.typeOfTest}</span>
            </div>
        </div>
    );
};

export default  React.memo(TestContent);