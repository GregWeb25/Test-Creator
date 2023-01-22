import React from 'react';
import {IOptionProps} from "../../models/models";

const ConstructorOption = ({option, test}:IOptionProps) => {
    return (
        <div className={option.isRight ? "bg-green-300 w-full" : "bg-white w-full"}>
            id: {option.id} text: {option.text}
        </div>
    );
};

export default ConstructorOption;