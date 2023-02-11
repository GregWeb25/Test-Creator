import React from 'react';
import TestsList from "../components/testsComponents/TestsList";
import ResultsPanel from "../components/testsComponents/ResultsPanel";
import PreviewCommunicationModule from "../components/PreviewCommunicationModule";
const PreviewPage = () => {
    return(
        <div className="flex flex-col items-center  pt-10    h-[120%] text-gray-800 font-medium gap-2">
            <PreviewCommunicationModule/>
            <TestsList/>
            <ResultsPanel/>
        </div>
    )
};

export default React.memo( PreviewPage);