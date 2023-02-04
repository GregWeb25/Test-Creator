import React from 'react';
import EditOption from "./EditOption";
import {IEditOptionsProps} from "../../../../models/models";

const EditOptions = ({currentOptions, setCurrentOptions, changedOptions, addOption}: IEditOptionsProps) => {
    return (
        <div className="py-2 px-3 border-2 border-gray-400 mb-2">
            <div className="mb-2">
                Options list:
            </div>

            {currentOptions.map((option, index) => {
                return (
                    <EditOption key={Date.now() + index} option={option} index={index}
                                setCurrentOptions={setCurrentOptions} changedOptions={changedOptions}/>
                )
            })}
            <button
                onClick={() => addOption()}
                className="bg-blue-500 px-2 py-1 w-full  text-white font-bold"
            >Add option
            </button>
        </div>

)

};

export default EditOptions;