import React from 'react';
import "../../../../styles.css"

interface TokenSearchProps {
    tokenId: string,
    setTokenId: (tokenId: string) => any
}

const TokenSearchInput: React.FC<TokenSearchProps> = ({tokenId, setTokenId}) => {
    return (
        <div className="border-gradient">
            <input className="w-full rounded-[18px] px-5 py-[20px]
                          bg-gray-900 text-white text-[13px] font-archivo
                          focus:ring-1
                          focus:ring-gray-400
                          outline-none"
                   value={tokenId}
                   onChange={e => setTokenId(e.target.value)}
                   placeholder="Enter Token ID..."
            />
        </div>
    );
};

export default TokenSearchInput;