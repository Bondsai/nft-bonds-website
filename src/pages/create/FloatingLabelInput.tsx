import React from 'react';

interface Props {
    inputType: string
    id: string
    placeholder: string
    func: (e: any) => void
}

const FloatingLabelInput: React.FC<Props> = ({inputType, id, placeholder, func}) => {
    return (
        <div className="relative rounded-3xl">
            <input type={inputType} id={id}
                   onChange={(e) => func(e.target.value)}
                   className="peer pt-8
                        text-white
                        text-base
                        bg-dark-gray font-archivo
                        rounded-2xl
                        focus:outline-none rounded-md focus:border-gray-500
                        focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                   placeholder={placeholder} autoComplete="off"/>
            <label htmlFor={id}
                   className="peer-placeholder-shown:opacity-100
                    text-gray-400
                    opacity-75 peer-focus:opacity-75
                    peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75
                    peer-placeholder-shown:translate-y-0 -translate-y-3
                    peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1
                    peer-focus:translate-x-1
                    absolute top-0 left-0 px-3 py-5 h-full
                    pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                {placeholder}
            </label>
        </div>
    );
};

export default FloatingLabelInput;