import React from 'react';

interface Props {
    inputType: string
    id: string
    placeholder: string
    func: (e: any) => void
    extraClasses?: string
    value?: string
}

const FloatingLabelInput: React.FC<Props> = ({inputType, id, placeholder, func, extraClasses, value}) => {
    return (
        <div className="relative rounded-3xl">
            <input type={inputType} id={id}
                   value={value}
                   onChange={(e) => func(e.target.value)}
                   className= {extraClasses + ` float-input pt-8
                        text-white
                        text-base
                        bg-dark-gray font-archivo
                        rounded-2xl
                        focus:outline-none rounded-md focus:border-gray-500
                        focus:shadow-sm w-full p-3 h-16 placeholder-transparent`}
                   placeholder={placeholder} autoComplete="off"/>
            <label htmlFor={id}
                   className="float-label
                        font-archivo
                        text-gray-400
                        opacity-75
                        absolute top-0 left-0 px-3 py-5 h-full
                        pointer-events-none">
                {placeholder}
            </label>
        </div>
    );
};

export default FloatingLabelInput;