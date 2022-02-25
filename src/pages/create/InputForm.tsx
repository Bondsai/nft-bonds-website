import React from 'react';

interface Props {
    type: string
    placeholder: string
    extra?: string
}

const InputForm = React.memo<Props>(({
    type,
    placeholder= "",
    extra
}) => {
    return (
        <input type={type}
               placeholder={placeholder}
               className={extra + ` rounded-xl px-3 py-3
                        outline-none
                        focus:ring-1
                        focus:ring-gray-400
                        placeholder-gray-400
                        text-white
                        text-base
                        bg-dark-gray font-archivo`}/>
    );
});

export default InputForm;