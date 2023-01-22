import React from 'react';
import TestsList from "../components/testsComponents/TestsList";
import ResultsPanel from "../components/testsComponents/ResultsPanel";
const PreviewPage = () => {
    return(
        <div className="flex flex-col items-center  pt-10    h-[120%] text-gray-800 font-medium gap-2">
            <TestsList/>
            <ResultsPanel/>
        </div>
    )
};

export default PreviewPage;