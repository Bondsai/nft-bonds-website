import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <div className="justify-center flex my-4 p-1">
            <div className="flex justify-center bg-sol-gray-light w-auto rounded-2xl">
                <input ref={ref} className="rounded-lg m-2 bg-sol-gray-light text-sol-white w-60" {...props}/>
                <BiSearchAlt2 className="p-2 text-sol-white h-full w-14"/>
            </div>
        </div>
    );
});

export default SearchInput;