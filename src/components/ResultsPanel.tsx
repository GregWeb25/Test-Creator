import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ITest} from "../models/models";
import getTotalCount from "../utils/getTotalCount";
import getPercentage from "../utils/getPercentage";
import getStatus from "../utils/getStatus";
import getECTS from "../utils/getECTS";

const ResultsPanel = () => {
    const tests = useSelector((state: RootState) => state.tests.tests);
    const enough = useSelector((state: RootState) => state.results.enough);
    const percentage = getPercentage(tests);
    return (
        <div className="bg-white w-[80%] py-1 px-2 pl-3 mb-14">
            Results:
            <div className="px-2 flex flex-col gap-2 font-normal text-gray-600 pb-3 mt-2">
                <div>
                    Total count: {getTotalCount(tests)}
                </div>
                <div>
                    As a percentage: {percentage}%
                </div>
                <div>
                    Enough: {enough}
                </div>
                <div>
                    Rating: {percentage}
                </div>
                <div>
                    As ECTS: {getECTS(percentage)}
                </div>
                <div>
                    Status: {getStatus(tests, enough)}
                </div>
            </div>
        </div>
    );
};

export default ResultsPanel;