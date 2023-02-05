import React from 'react';
import EditOption from "./EditOption";
import {IEditOptionsProps} from "../../../../models/models";
import CustomButton from "../../../ui/CustomButton";

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
            <CustomButton
                onClick={() => addOption()}
                className="w-full"
            >Add option
            </CustomButton>
        </div>

)

};

export default EditOptions;