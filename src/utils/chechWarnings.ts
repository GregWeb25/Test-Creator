import {IAnswerOption} from "../models/models";
import {TestTypes} from "../models/models";

const chechWarnings = (currentType: string, changedOptions: IAnswerOption[]) => {
    let rightAnswersCount = 0
    let text = "";

    changedOptions.forEach((option)=>{
        if (option.isRight){
            rightAnswersCount++;
        }
    });

    if (rightAnswersCount === 0){
        text = "Choose at least one correct answer!";
        return {isWarning: true, text: text}
    }

    if (rightAnswersCount === 1 && currentType === TestTypes.multiple){
        text = "There should be more than one correct answer in a multiple choice test!";
        return {isWarning: true, text: text}
    }

    if (rightAnswersCount > 1 && currentType === TestTypes.single){
        text = "In a single choice test, there should be only one correct answer!";
        return {isWarning: true, text: text}
    }
    return {isWarning: false, text: ""}
}

export default chechWarnings;