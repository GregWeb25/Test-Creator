import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex text-white justify-between items-center h-[50px] px-5 shadow-md bg-gray-500">
            <h3 className="font-bold">Tests creator</h3>
            <div>
                <Link className="mr-3" to="/">Preview</Link>
                <Link to="/constructor">Constructor</Link>
            </div>
        </nav>
    );
};

export default React.memo(Navigation);