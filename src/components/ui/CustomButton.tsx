import React from 'react';
import {ICustomButtonProps} from "../../models/models";

const CustomButton = ({onClick, children, className}:ICustomButtonProps<any>) => {
    const  defaultClasses = "bg-blue-500 px-2 py-1 text-white font-bold ";
    const classes = className ? defaultClasses.concat(className) : defaultClasses;
    return (
        <button
            onClick={() => onClick()}
            className={classes}
        >{children}
        </button>
    );
};

export default CustomButton;