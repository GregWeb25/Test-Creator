import React from 'react';
import {IModalWindowProps} from "../../models/models";

const ModalWindow = ({isHidden, children, hide}: IModalWindowProps) => {
    let classes = "fixed top-0 left-0 z-1 h-[100%] w-[100%] flex items-center justify-center";
    let hiddenClass = "hidden";
    return (
        <div
            onClick={(e)=>{
                hide(true);
                e.stopPropagation();
            }}
            className={isHidden ? hiddenClass : classes}
        >
            <div className="h-[100%] top-0 left-0 absolute w-[100%] bg-black opacity-50">

            </div>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="z-0 h-auto w-[80%] "
            >
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;