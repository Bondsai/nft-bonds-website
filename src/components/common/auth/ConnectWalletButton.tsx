import React from 'react';
import {BiWallet} from 'react-icons/bi'

const ConnectWalletButton = () => {
    return (
        <button className="font-archivo font-semibold px-[16px] py-[8px] text-white opacity-90
                           bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl
                           hover:from-blue-500 hover:to-purple-300"
        >
            <div className="inline-flex items-center justify-center gap-2">
                Connect wallet
                <BiWallet size={18}/>
            </div>
        </button>
    );
};

export default ConnectWalletButton;