import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import CustomButton from "../ui/CustomButton";
import {useAppDispatch} from "../../store/appDispatch";
import {setEnough} from "../../store/results/resultsReducer";
import {isValid} from "../../utils/isValidEnough";

const ConstructorResults = () => {
    const enough = useSelector((state: RootState) => state.results.enough);
    const [inputText, setInputText] = useState("");
    const dispatch = useAppDispatch();

    useEffect(()=>{
            setInputText(String(enough));
    },[enough])

    return (
        <div className="bg-white w-[80%] py-1 px-2 flex items-center justify-between">
            <div>
                enough to pass:
                <input
                    className={!isValid(inputText) ? "text-red-500 ml-1" : "ml-1"}
                    value={inputText}
                    onChange={(e)=>setInputText(e.target.value)}
                    type="text"
                />
                {!isValid(inputText) &&
                    <span
                        className="text-red-500 ml-5"
                    >Must be a number from 1 to 100</span>
                }
            </div>
            <div>
                <CustomButton
                    className={!isValid(inputText) ? "bg-red-500" : ""}
                    disabled={!isValid(inputText)}
                    onClick={()=>dispatch(setEnough(Number(inputText)))}
                >
                    Edit
                </CustomButton>
            </div>
        </div>
    );
};

export default ConstructorResults;