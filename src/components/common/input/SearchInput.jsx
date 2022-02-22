import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <div className="flex grid-rows-1 justify-center">
            <input ref={ref} {...props}/>
            <BiSearchAlt2 className="p-2 text-sol-white h-full w-12 hover:bg-sol-gray-light rounded-lg"/>
        </div>
    );
});

export default SearchInput;