import React, {useState} from 'react';
import './test.css'
import {Row} from "./CreatePage";

interface Props {
    inputType: string
    placeholder: string
}

const FloatingLabelInput: React.FC<Props> = ({inputType, placeholder}) => {
    const [color, setColor] = useState("")

    return (
        <div className="mb-5 relative">
            <input type="email" id="email"
                   className="peer pt-8 border border-gray-200 focus:outline-none rounded-xl focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                   placeholder="name@example.com" autoComplete="off"/>
            <label htmlFor="email"
                   className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email
                address</label>
        </div>

        // <div className="form-floating">
        //     <input type={inputType} className="p-10 form-control p-10" id="floatingInput" placeholder=" "
        //     />
        //     <label htmlFor="floatingInput" className="floating-label p-0 border-none text-gray-700">{placeholder}</label>
        // </div>
    );
};

export default FloatingLabelInput;