import React, {useCallback, useMemo, useState} from 'react';
import {IAnswerOption, IEditTestProps, ITest} from "../../../../models/models";
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
import CustomButton from "../../../ui/CustomButton";
import addOption from "../../../../utils/addOption";

const EditTest = ({test, index ,setModalHidden}:IEditTestProps) => {
    const [currentText, setCurrentText] = useState<string>(test.text);
    const [currentWeight, setCurrentWeight] = useState<number>(test.weight);
    const [currentType, setCurrentType] = useState(test.typeOfTest);
    const [currentOptions, setCurrentOptions] = useState<IAnswerOption[]>(test.answerOptions);
    const dispatch = useAppDispatch();
    let changedOptions: IAnswerOption[] = JSON.parse(JSON.stringify(currentOptions));
    const [warningModalHidden, setWarningModalHidden] = useState<boolean>(true);
    const [warningText, setWarningText] = useState<string>("")

    const saveTest = useCallback( () => {
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
            return 0;
        }
    },[currentOptions, currentType, currentText, currentWeight])


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
                <CustomButton
                    onClick={() => saveTest()}
                    className="mb-1"
                >Save</CustomButton>
            </div>
            <ModalWindow isHidden={warningModalHidden} hide={setWarningModalHidden}>
                <WarningModal text={warningText} setWarningModalHidden={setWarningModalHidden}/>
            </ModalWindow>
        </div>
    );
};

export default React.memo(EditTest);