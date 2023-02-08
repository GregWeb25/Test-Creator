import React from 'react';
import ConstructorTestList from "../components/constructorComponents/ConstructorTestList";
import ConstructorResults from "../components/constructorComponents/ConstructorResults";
import CustomButton from "../components/ui/CustomButton";
import {useAppDispatch} from "../store/appDispatch";
import {addTest} from "../store/tests/testsReducer";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import ConstructorCommunicationModule from "../components/constructorComponents/CommunicationModule/ConstructorCommunicationModule";
import getEmptyTest from "../utils/getEmptyTest";

const ConstructorPage = () => {
    const dispatch = useAppDispatch();
    const tests = useSelector((state: RootState) => state.tests.tests)

    return (
        <div className="flex flex-col items-center  pt-10    h-[120%] text-gray-800 font-medium gap-2">
            <ConstructorTestList/>
            <CustomButton
                onClick={()=>dispatch(addTest(getEmptyTest(tests)))}
                className="w-[80%]"
            > Add </CustomButton>
            <ConstructorResults/>
            <ConstructorCommunicationModule/>
        </div>
    );
};

export default ConstructorPage;