import React from 'react';
import {IOptionProps} from "../../../models/models";
import {checking} from "../../../store/tests/testsReducer";
import {useAppDispatch} from "../../../store/appDispatch";

const MultipleOption = ({option, test}: IOptionProps) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <input
                onChange={()=>dispatch(checking({testId: test.id, answerOptionsId: option.id}))}
                type="checkbox"
                checked={option.isChecked}/>
            <span className="ml-1">{option.text}</span>
        </div>
    );
};

export default  React.memo(MultipleOption);