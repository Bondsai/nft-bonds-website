import React from 'react';

interface TokenPriceProps {
    amount: string,
    icon: React.ReactNode
}

const TokenPriceBlock: React.FC<TokenPriceProps> = ({
    amount,
    icon
}) => {
    return (
        <div className="inline-flex gap-1 items-center font-archivo font-bold">
            {amount}
            {icon}
        </div>
    );
};

export default TokenPriceBlock;