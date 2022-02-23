import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <div className="justify-center flex my-4 p-1">
            <div className="flex justify-center bg-sol-gray-button-hover w-auto rounded-2xl">
                <input ref={ref} className="rounded-lg m-2 bg-sol-gray-button-hover text-sol-white w-60" {...props}/>
                <BiSearchAlt2 className="p-2 text-sol-white h-full w-14 cursor-pointer"/>
            </div>
        </div>
    );
});

export default SearchInput;