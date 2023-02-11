import React from 'react';
import {IEditTextProps} from "../../../../models/models";

const EditText = ({currentText,setCurrentText}:IEditTextProps) => {
    return (
        <div className="py-2 px-3 border-2 border-gray-400 mb-2">
            <div className="mb-2">
                Edit next:
            </div>
            <textarea
                value={currentText}
                onChange={(e)=>setCurrentText(e.target.value)}
                className="px-2 w-full h-32 py-1 border-gray-400"
                name="newText" id="2"
                placeholder="new text.."
            ></textarea>
        </div>
    );
};

export default React.memo(EditText);