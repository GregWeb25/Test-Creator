import React, {memo} from 'react';

const EditId = ({id}:{id: number}) => {
    return (
            <div className="py-2 px-3 border-2 border-gray-400 mb-2">
                id: {id}
            </div>
    );
};

export default React.memo(EditId);