import {ITest} from "../models/models";
import getTotalCount from "./getTotalCount";

const getPercentage = (tests: ITest[]) => {
    let total = 0;
    tests.map((test: ITest) => {
        total += test.weight;
    })
    if(getTotalCount(tests) === 0){
        return 0;
    }
    return Math.ceil((getTotalCount(tests)/total)*100);
}

export default  getPercentage;