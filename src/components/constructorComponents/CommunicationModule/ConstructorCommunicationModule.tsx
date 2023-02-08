import React from 'react';
import ExportModule from "./ExportModule";
import ImportModule from "./ImportModule";

const ConstructorCommunicationModule = () => {
    return (
        <div className="bg-white w-[80%] py-1 px-2 flex flex-col items-center  mb-14">
            <ExportModule/>
            <ImportModule/>
        </div>
    );
};

export default ConstructorCommunicationModule;