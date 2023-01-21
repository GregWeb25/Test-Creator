import {ITest} from "../models/models";

const getTotalCount = (tests: ITest[]) => {
    let result = 0;
    tests.map((test: ITest) => {
        if (test.isPassed) {
            result += test.weight;
        }
    })
    return result;
}

export default  getTotalCount;