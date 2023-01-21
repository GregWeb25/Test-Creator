import React from 'react';
import TestsList from "../components/TestsList";
import ResultsPanel from "../components/ResultsPanel";
const PreviewPage = () => {
    return(
        <div className="flex flex-col items-center  pt-10   w-screen h-[120%] text-gray-800 font-medium gap-2">
            <TestsList/>
            <ResultsPanel/>
        </div>
    )
};

export default PreviewPage;