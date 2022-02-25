import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <div className="justify-center flex mb-4 p-1">
            <div className="flex justify-center bg-gray-900 w-auto rounded-2xl border-2 border-sol-white">
                <input ref={ref} className="rounded-lg m-2 bg-gray-900 text-sol-white w-36 lg:w-60" {...props}/>
                <BiSearchAlt2 className="p-2 text-sol-white h-full w-12 cursor-default"/>
            </div>
        </div>
    );
});

export default SearchInput;