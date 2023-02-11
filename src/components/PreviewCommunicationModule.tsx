import React from 'react';
import ImportModule from "./constructorComponents/CommunicationModule/ImportModule";

const PreviewCommunicationModule = () => {
    return (
        <div className="bg-white  w-[80%] py-1 px-2 mt-10 flex flex-col items-center  mb-1">
            <ImportModule/>
        </div>
    );
};

export default React.memo(PreviewCommunicationModule);