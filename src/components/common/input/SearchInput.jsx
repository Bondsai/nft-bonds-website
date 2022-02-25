import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import "../../../styles.css"

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <div className="justify-center border-gradient-search flex my-4 p-1 md:mr-14">
            <div className="flex justify-center bg-gray-900 w-auto" style={{
                borderRadius: "18px"
            }}>
                <input ref={ref}
                       className="m-2 bg-gray-900 text-sol-white w-36 lg:w-60 outline-none" {...props}
                />
                <BiSearchAlt2 className="p-2 text-sol-white h-full w-12 cursor-default"/>
            </div>
        </div>
    );
});

export default SearchInput;