import React, {useEffect, useState} from 'react';
import {IAnswerOption, IEditTestProps, ITest, TestTypes} from "../../../../models/models";
import EditOption from "./EditOption";
import {useAppDispatch} from "../../../../store/appDispatch";
import {editTest} from "../../../../store/tests/testsReducer";
import ModalWindow from "../../../modals/ModalWindow";
import WarningModal from "../../WarningModal";
import chechWarnings from "../../../../utils/chechWarnings";
import EditId from "./EditId";
import EditType from "./EditType";
import EditWeight from "./EditWeight";
import EditText from "./EditText";
import EditOptions from "./EditOptions";

const EditTest = ({test, index ,setModalHidden}:IEditTestProps) => {
    const [currentText, setCurrentText] = useState<string>(test.text);
    const [currentWeight, setCurrentWeight] = useState<number>(test.weight);
    const [currentType, setCurrentType] = useState(test.typeOfTest);
    const [currentOptions, setCurrentOptions] = useState<IAnswerOption[]>(test.answerOptions);
    const dispatch = useAppDispatch();
    const types = Object.keys(TestTypes);
    let changedOptions: IAnswerOption[] = JSON.parse(JSON.stringify(currentOptions));
    const [warningModalHidden, setWarningModalHidden] = useState<boolean>(true);
    const [warningText, setWarningText] = useState<string>("")

    const saveTest = () => {
        let {isWarning, text} = chechWarnings( currentType, changedOptions);

        if(isWarning){
            setWarningText(text);
            setWarningModalHidden(false);
            return 0;
        } else  {

            const changedTest: ITest = {
                id: test.id,
                text: currentText,
                typeOfTest: currentType,
                weight: currentWeight,
                answerOptions: changedOptions,
                isFailed: false,
                isPassed: false,
            }

            dispatch(editTest({
                test: changedTest,
                index: index
            }));

            setModalHidden(true);
        }
    }

    const addOption = () => {
        const newOption: IAnswerOption = {
            id: currentOptions.length+1,
            text: "enter the text here",
            isRight: false,
            isChecked: false
        }
        changedOptions.push(newOption);
        setCurrentOptions(changedOptions);
    }

    return (
        <div className="w-full bg-white px-3 py-2">
            <div className="mb-1">
                <EditId id={test.id}/>
                <EditType currentType={currentType} setCurrentType={setCurrentType}/>
                <EditWeight setCurrentWeight={setCurrentWeight} currentWeight={currentWeight}/>
                <EditText setCurrentText={setCurrentText} currentText={currentText}/>
                <EditOptions changedOptions={changedOptions} currentOptions={currentOptions} setCurrentOptions={setCurrentOptions} addOption={addOption}/>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={() => saveTest()}
                    className="bg-blue-500 px-2 py-1  text-white font-bold mb-1"
                >Save</button>
            </div>
            <ModalWindow isHidden={warningModalHidden} hide={setWarningModalHidden}>
                <WarningModal text={warningText} setWarningModalHidden={setWarningModalHidden}/>
            </ModalWindow>
        </div>
    );
};

export default EditTest;