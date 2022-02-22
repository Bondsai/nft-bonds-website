import React, {MouseEventHandler} from 'react';
import BaseButton from "./BaseButton";

interface ButtonProps {
    title: string | number
    onClick?: MouseEventHandler
}

const SolanaBlueButton: React.FC<ButtonProps> = ({
    title,
    onClick,
}) => {
    return (
        <BaseButton extraClasses="bg-solana-blue text-white"
                    onClick={onClick}>
            {title}
        </BaseButton>
    );
};

export default SolanaBlueButton;