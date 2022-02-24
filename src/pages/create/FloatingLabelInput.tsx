import React from 'react';
import './FloatingLabelInput.css'

interface Props {
    inputType: string
    placeholder: string
}

const FloatingLabelInput: React.FC<Props> = ({inputType, placeholder}) => {
    return (
        <div className="form-floating">
            <input type={inputType} className="form-control
              block
              w-full
              px-3
              py-1.5
              m-0
              text-base font-normal text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder=" "
              />
            <label htmlFor="floatingInput" className="floating-label text-gray-700">{placeholder}</label>
        </div>
    );
};

export default FloatingLabelInput;