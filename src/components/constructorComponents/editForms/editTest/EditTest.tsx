import React from 'react';
import {ITest, TestTypes} from "../../../../models/models";

const EditTest = ({test}:{test: ITest}) => {
    const types = Object.keys(TestTypes);
    return (
        <div className="w-full bg-white px-3 py-2">
            <div className="mb-1">
                <div>
                    id: {test.id}
                </div>
                <div>
                    Type of test:
                    <select name="typeSelect" id="1">
                        {types.map((type, index)=>{

                            return(
                                <option
                                    key={Date.now()+index}
                                    selected={test.typeOfTest === type ? true : false}
                                >{type}</option>
                            )
                        } )}
                    </select>
                </div>
                <div>
                    Current text: {test.text}
                    edit: <br/>
                    <textarea
                        className="px-2 w-full"
                        name="newText" id="2"
                        placeholder="new text.."
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-blue-500 px-2 py-1  text-white font-bold mb-1"
                >Save</button>
            </div>
        </div>
    );
};

export default EditTest;