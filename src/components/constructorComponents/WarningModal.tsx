import React from 'react';
import {IWarningModalProps} from "../../models/models";

const WarningModal = ({text, setWarningModalHidden}:IWarningModalProps) => {
    return (
        <div className="w-full bg-white px-3 py-2">
            <div className="font-bold text-orange-500">Warning:</div>
            <div>{text}</div>
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        setWarningModalHidden(true);
                    }}
                    className="bg-blue-500 px-2 py-1  text-white font-bold mb-1"
                >Ok</button>
            </div>
        </div>
    );
};

export default React.memo(WarningModal);