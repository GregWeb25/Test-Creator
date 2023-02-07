import React, {useState} from 'react';
import CustomButton from "../../ui/CustomButton";
import {useAppDispatch} from "../../../store/appDispatch";
import parseData from "../../../utils/parseData";

const ImportModule = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    return (
        <div className="w-full">
            <h2>Import test:</h2>
            <textarea
                className="px-2 w-full h-32 py-1 border-gray-400"
                placeholder="Enter JSON"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
            <div
                className="flex justify-end"
            >
                <CustomButton
                    onClick={()=>setText(parseData(text, dispatch))}
                >
                    Parse
                </CustomButton>
            </div>
        </div>

    );
};

export default ImportModule;