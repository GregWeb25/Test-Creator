import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState, store} from "../../../store";
import CustomButton from "../../ui/CustomButton";
import {useAppDispatch} from "../../../store/appDispatch";
import {setAllTests} from "../../../store/tests/testsReducer";
import {setEnough} from "../../../store/results/resultsReducer";

const ImportModule = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    const checkFormat = () => {
        const data = JSON.parse(text);
        if(data.length === 2){
            dispatch(setAllTests(data[0]));
            dispatch(setEnough(data[1]));
        } else setText("Data is wrong!")
        setText("");
    }

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
                    onClick={()=>checkFormat()}
                >
                    Parse
                </CustomButton>
            </div>
        </div>

    );
};

export default ImportModule;