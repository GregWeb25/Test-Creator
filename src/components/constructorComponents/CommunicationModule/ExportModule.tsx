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
            <textarea
                className="px-2 w-full h-32 py-1 border-gray-400"
                value={dataJSON}
                onChange={()=>{}}
            ></textarea>
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