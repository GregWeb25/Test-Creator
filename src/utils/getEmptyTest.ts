import {ITest, TestTypes} from "../models/models";

const getEmptyTest = (tests: ITest[]) => {
    let currentId: number = 0;
    tests.forEach(test => {
        if(test.id>=currentId){
            currentId = test.id+1
        }
    })
    const emptyTest = {
        id: currentId,
        text: "",
        weight: 0,
        answerOptions: [],
        isPassed: false,
        isFailed: false,
        typeOfTest: TestTypes.single,
    }

    return emptyTest;
}

export default getEmptyTest;