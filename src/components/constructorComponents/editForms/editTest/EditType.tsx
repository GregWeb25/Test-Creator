import React from 'react';
import {IEditTypeProps} from "../../../../models/models";
import {TestTypes} from "../../../../models/models";

const EditType = ({currentType, setCurrentType}:IEditTypeProps) => {
    const types = Object.keys(TestTypes);
    return (
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
    );
};

export default EditType;