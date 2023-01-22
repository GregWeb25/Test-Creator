import React from 'react';
import {IAnswerOption, ITestProps} from "../../models/models";
import ConstructorOption from "./ConstructorOption";

const ConstructorTestItem = ({test, index}: ITestProps) => {
    return (
        <div className="bg-white w-[80%] py-1 px-2 flex justify-between items-end">
            <div>
                id: <span className="font-normal text-gray-600"> {test.id} </span> <br/>
                text: <span className="font-normal text-gray-600"> {test.text} </span> <br/>
                weight: <span className="font-normal text-gray-600">  {test.weight} </span> <br/>
                type: <span className="font-normal text-gray-600"> {test.typeOfTest} </span> <br/>
                <div className="flex gap-2 items-start">
                    options:
                    <div className="flex flex-col gap-1 font-normal text-gray-600">
                        {test.answerOptions.map((option: IAnswerOption) => {
                            return(
                                <ConstructorOption test={test} option={option} key={Date.now()+option.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex w-[15vw] h-[100%] items-end justify-end gap-2">
                <button className="bg-blue-500 px-2 py-1  text-white font-bold mb-1">Edit</button>
                <button className="bg-blue-500 px-2 py-1  text-white font-bold mb-1">Delete</button>
            </div>
        </div>
    );
};

export default ConstructorTestItem;