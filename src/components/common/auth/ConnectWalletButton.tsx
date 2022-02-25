import React from 'react';
import {BiWallet} from 'react-icons/bi'
import {solanaProvider} from "../../../solana/core";

interface ConnectWalletProps {
    setAccount: (account: string) => any
}

const ConnectWalletButton: React.FC<ConnectWalletProps> = ({setAccount}) => {

    const connect = () => {
        const provider = solanaProvider()
        if (!provider) {
            window.open("https://phantom.app/", "_blank")
            return
        }
        provider.connect({})
            .then(response => setAccount(response.publicKey.toString()))
            .catch(() => console.log("Phantom auth error"))
    }

    return (
        <button className="font-archivo font-semibold px-[16px] py-[8px] text-white opacity-90
                           bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl
                           hover:from-blue-500 hover:to-purple-300"
                onClick={connect}
        >
            <div className="inline-flex items-center justify-center gap-2">
                Connect wallet
                <BiWallet size={18}/>
            </div>
        </button>
    );
};

export default ConnectWalletButton;