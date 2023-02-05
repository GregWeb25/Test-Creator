import React from 'react';
import ConstructorTestList from "../components/constructorComponents/ConstructorTestList";
import ConstructorResults from "../components/constructorComponents/ConstructorResults";
import CustomButton from "../components/ui/CustomButton";
import {useAppDispatch} from "../store/appDispatch";
import {addTest} from "../store/tests/testsReducer";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {TestTypes} from "../models/models";
import ConstructorCommunicationModule from "../components/constructorComponents/CommunicationModule/ConstructorCommunicationModule";

const ConstructorPage = () => {
    const dispatch = useAppDispatch();
    const tests = useSelector((state: RootState) => state.tests.tests)
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
    return (
        <div className="flex flex-col items-center  pt-10    h-[120%] text-gray-800 font-medium gap-2">
            <ConstructorTestList/>
            <CustomButton
                onClick={()=>dispatch(addTest(emptyTest))}
                className="w-[80%]"
            > Add </CustomButton>
            <ConstructorResults/>
            <ConstructorCommunicationModule/>
        </div>
    );
};

export default ConstructorPage;