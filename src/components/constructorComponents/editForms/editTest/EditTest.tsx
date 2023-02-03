import React, {useState} from 'react';
import {IAnswerOption, IEditTestProps, ITest, TestTypes} from "../../../../models/models";
import EditOption from "./EditOption";
import {useAppDispatch} from "../../../../store/appDispatch";
import {editTest} from "../../../../store/tests/testsReducer";
import ModalWindow from "../../../modals/ModalWindow";
import WarningModal from "../../WarningModal";

const EditTest = ({test, index ,setModalHidden}:IEditTestProps) => {
    const [warningModalHidden, setWarningModalHidden] = useState<boolean>(true);
    const [currentText, setCurrentText] = useState<string>(test.text);
    const [currentWidth, setCurrentWidth] = useState<number>(test.weight);
    const [currentType, setCurrentType] = useState(test.typeOfTest);
    const [currentOptions, setCurrentOptions] = useState<IAnswerOption[]>(test.answerOptions);
    const [warningText, setWarningText] = useState<string>("")
    const dispatch = useAppDispatch();
    const types = Object.keys(TestTypes);
    let changedOptions: IAnswerOption[] = JSON.parse(JSON.stringify(currentOptions));

    const saveTest = () => {

        let rightAnswersCount = 0

        changedOptions.forEach((option)=>{
            if (option.isRight){
                rightAnswersCount++;
            }
        });

        console.log(rightAnswersCount);

        if (rightAnswersCount === 0){
            setWarningText("Choose at least one correct answer!");
            setWarningModalHidden(false);
            return 0;
        }

        if (rightAnswersCount === 1 && currentType === TestTypes.multiple){
            setWarningText("There should be more than one correct answer in a multiple choice test!");
            setWarningModalHidden(false);
            return 0;
        }

        if (rightAnswersCount > 1 && currentType === TestTypes.single){
            setWarningText( "In a single choice test, there should be only one correct answer!");
            setWarningModalHidden(false);
            return 0;
        }

        const changedText: ITest = {
            id: test.id,
            text: currentText,
            typeOfTest: currentType,
            weight: currentWidth,
            answerOptions: changedOptions,
            isFailed: false,
            isPassed: false,
        }

        dispatch(editTest({
            test: changedText,
            index: index
        }));

        setModalHidden(true);
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
                <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                    id: {test.id}
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                    Type of test:
                    <select
                        name="typeSelect"
                        id="1"
                        value={currentType}
                        onChange={(e) => setCurrentType(e.target.value)}
                    >
                        {types.map((type, index)=>{
                            type = JSON.parse(JSON.stringify(type));
                            return(
                                <option
                                    key={Date.now()+index}
                                    value={type}
                                >{type}</option>
                            )
                        } )}
                    </select>
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                    <div className="mb-2">
                        Test scores:
                    </div>
                    <input
                        value={currentWidth}
                        onChange={(e) => {
                            setCurrentWidth(Number(e.target.value));
                        }}
                        type="text"
                    />
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                    <div className="mb-2">
                        Edit next:
                    </div>
                    <textarea
                        value={currentText}
                        onChange={(e)=>setCurrentText(e.target.value)}
                        className="px-2 w-full h-32 py-1 border-gray-400"
                        name="newText" id="2"
                        placeholder="new text.."
                    ></textarea>
                </div>
                <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                    <div className="mb-2">
                        Options list:
                    </div>

                    {currentOptions.map((option, index) => {
                        return(
                            <EditOption key={Date.now()+index} option={option} test={test} index={index} setCurrentOptions={setCurrentOptions} changedOptions={changedOptions} />
                        )
                    })}
                    <button
                        onClick={() => addOption()}
                        className="bg-blue-500 px-2 py-1 w-full  text-white font-bold"
                    >Add option</button>
                </div>
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