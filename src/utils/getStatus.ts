import {ITest} from "../models/models";
import getPercentage from "./getPercentage";

const getStatus = (tests: ITest[], enough: number) => {
    let completedTestsCount = 0;
    let completed = false;
    tests.map((test: ITest) => {
        if (test.isPassed || test.isFailed){
            completedTestsCount++;
        }
    })
    completed = completedTestsCount === tests.length ? true : false;
    if(completed && getPercentage(tests) >= enough){
        return "passed successfully"
    }
    if(completed && getPercentage(tests) < enough){
        return "failed"
    }
    return "not finished"
}

export default getStatus;