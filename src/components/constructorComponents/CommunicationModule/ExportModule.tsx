import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import CustomButton from "../../ui/CustomButton";

const ExportModule = () => {
    const tests = useSelector((state: RootState) => state.tests.tests);
    const enough = useSelector((state: RootState) => state.results.enough);
    const [dataJSON, setDataJSON] = useState( JSON.stringify([tests,enough]));

    useEffect(()=>{
        setDataJSON( JSON.stringify([tests,enough]));
    },[tests,enough])

    return (
        <div className="w-full">
            <h2>Export test:</h2>
            The data will be placed in the clipboard.
            <div
                className="flex justify-end"
            >
                <CustomButton
                    onClick={async  ()=>{ await  navigator.clipboard.writeText(dataJSON)}}
                >
                    Copy
                </CustomButton>
            </div>
        </div>
    );
};

export default ExportModule;