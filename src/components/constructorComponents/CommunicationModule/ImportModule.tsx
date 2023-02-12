import React, {useMemo, useState} from 'react';
import CustomButton from "../../ui/CustomButton";
import {useAppDispatch} from "../../../store/appDispatch";
import parseData from "../../../utils/parseData";

const ImportModule = () => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState('The data must be in the clipboard.');

    return (
        <div className="w-full">
            <h2>Import test:</h2>
            {text}
            <div
                className="flex justify-end"
            >
                <CustomButton
                    className="mb-1"
                    onClick={ async ()=> setText(await parseData(dispatch))}
                >
                    Parse
                </CustomButton>
            </div>
        </div>

    );
};

export default React.memo(ImportModule);