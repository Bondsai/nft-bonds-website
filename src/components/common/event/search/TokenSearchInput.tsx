import React from 'react';
import "../../../../styles.css"

interface TokenSearchProps {
    tokenId: string,
    setTokenId: (tokenId: string) => any
}

const TokenSearchInput: React.FC<TokenSearchProps> = ({tokenId, setTokenId}) => {
    return (
        <input className="w-full rounded-2xl px-5 py-3
                          bg-gray-900 text-white text-sm font-archivo
                          focus:ring-1
                          focus:ring-gray-400
                          outline-none"
               value={tokenId}
               onChange={e => setTokenId(e.target.value)}
               placeholder="Enter Token ID..."
        />
    );
};

export default TokenSearchInput;