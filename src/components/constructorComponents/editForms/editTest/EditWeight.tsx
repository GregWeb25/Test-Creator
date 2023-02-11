import React from 'react';
import {IEditWeightProps} from "../../../../models/models";

const EditWeight = ({currentWeight,setCurrentWeight}:IEditWeightProps) => {
    return (
        <div className="py-2 px-3 border-2 border-gray-400 mb-2">
            <div className="mb-2">
                Test scores:
            </div>
            <input
                value={currentWeight}
                onChange={(e) => {
                    setCurrentWeight(Number(e.target.value));
                }}
                type="text"
            />
        </div>
    );
};

export default React.memo(EditWeight);