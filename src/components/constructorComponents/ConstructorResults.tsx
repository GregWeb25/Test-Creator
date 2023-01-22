import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const ConstructorResults = () => {
    const enough = useSelector((state: RootState) => state.results.enough);
    return (
        <div className="bg-white w-[80%] py-1 px-2 mb-16 flex items-center justify-between">
            <div>enough to pass: <span className="font-normal text-gray-600">{enough}%</span></div>
            <div><button className="bg-blue-500 px-2 py-1  text-white font-bold">Edit</button></div>
        </div>
    );
};

export default ConstructorResults;