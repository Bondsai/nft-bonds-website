import React from 'react';

interface TokenSearchProps {
    tokenId: string,
    setTokenId: (tokenId: string) => any
}

const TokenSearchInput: React.FC<TokenSearchProps> = ({tokenId, setTokenId}) => {
    return (
        <input className="w-full rounded-3xl px-5 py-[20px]
                          bg-sol-gray text-white text-[13px] font-archivo
                          focus:bg-gray-800
                          outline-none
        "
               value={tokenId}
               onChange={e => setTokenId(e.target.value)}
               placeholder="Enter Token ID..."
        />
    );
};

export default TokenSearchInput;