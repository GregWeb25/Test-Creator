import {IAnswerOption} from "../models/models";

const addOption = (currentOptions: IAnswerOption[], changedOptions: IAnswerOption[]) => {
    const newOption: IAnswerOption = {
        id: currentOptions.length+1,
        text: "enter the text here",
        isRight: false,
        isChecked: false
    }
    changedOptions.push(newOption);
    return changedOptions;
}

export default addOption;