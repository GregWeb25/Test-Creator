import React from 'react';
import ConstructorTestList from "../components/constructorComponents/ConstructorTestList";
import ConstructorResults from "../components/constructorComponents/ConstructorResults";

const ConstructorPage = () => {
    return (
        <div className="flex flex-col items-center  pt-10    h-[120%] text-gray-800 font-medium gap-2">
            <ConstructorTestList/>
            <button className="bg-blue-500 px-2 py-1 w-[80%]  text-white font-bold">Add</button>
            <ConstructorResults/>
        </div>
    );
};

export default ConstructorPage;