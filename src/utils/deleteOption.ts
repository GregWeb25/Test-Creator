import {IAnswerOption} from "../models/models";

const deleteOption = ( changedOptions: IAnswerOption[], index: number) => {
    changedOptions.splice(index,1);
    return changedOptions;
}

export default deleteOption;