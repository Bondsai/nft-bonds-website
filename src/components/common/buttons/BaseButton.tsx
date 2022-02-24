import React from 'react';

interface ButtonProps {
    extraClasses?: string
}

const BaseButton: React.FC<ButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
    extraClasses,
    children,
    ...props
}) => {
    return (
        <button className={"px-7 py-2 font-medium data-modal-toggle=\"defaultModal\" " + extraClasses}
                {...props}
        >
            {children}
        </button>
    );
};

export default BaseButton;