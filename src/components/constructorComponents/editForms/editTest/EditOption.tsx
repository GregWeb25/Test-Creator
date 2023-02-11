import React, {memo, useEffect, useRef, useState} from 'react';
import { IEditOptionProps} from "../../../../models/models";
import CustomButton from "../../../ui/CustomButton";
import deleteOption from "../../../../utils/deleteOption";

const EditOption = ({option, setCurrentOptions, index, changedOptions}:IEditOptionProps) => {
    const [text, setText] = useState(option.text);
    const [isRight, setIsRight] = useState(option.isRight);
    const input = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        setTimeout(()=>{
            input.current!.focus();
        },1);
    }
    useEffect(()=>{
        changedOptions[index] = {...changedOptions[index], text: text, isRight: isRight}
    },[text, isRight])

    return (
        <div key={Date.now()+index} className="py-2 px-3 border-l-2 border-gray-400 mb-2">
            <div>id: {option.id}</div>
            <div>
                Edit text:
                <input
                    className="ml-2"
                    type="text"
                    value={text}
                    ref={input}
                    onChange={(e)=> {
                        setText(e.target.value);
                        focusOnInput();
                    }}
                />
            </div>
            <div>Is Right:
                <input
                    className="ml-2"
                    type="checkbox"
                    checked={isRight}
                    onChange={(e)=>setIsRight(prevState => !prevState)}
                />
            </div>
            <div className="flex justify-end">
                <CustomButton
                    onClick={()=> setCurrentOptions(deleteOption(changedOptions, index))}
                    className="mb-1"
                >Delete</CustomButton>
            </div>
        </div>
    );
};

export default  React.memo(EditOption);