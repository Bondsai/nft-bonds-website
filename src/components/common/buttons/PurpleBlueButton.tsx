import React, {MouseEventHandler} from 'react';
import BaseButton from "./BaseButton";

interface ButtonProps {
    title: string | number
    onClick?: MouseEventHandler
}

const PurpleGreenButton: React.FC<ButtonProps> = ({
    title,
    onClick,
}) => {
    return (
        <BaseButton extraClasses="bg-gradient-to-br from-sol-green text-sm to-blue-500 text-white"
                    onClick={onClick}>
            {title}
        </BaseButton>
    );
};

export default PurpleGreenButton;