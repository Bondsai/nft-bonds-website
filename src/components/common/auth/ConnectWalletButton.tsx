import React from 'react';
import {BiWallet} from 'react-icons/bi'
import {getSolanaProvider} from "../../../solana/wallet/provider";

interface ConnectWalletProps {
    setAccount: (account: string) => any
}

const ConnectWalletButton: React.FC<ConnectWalletProps> = ({setAccount}) => {

    const connect = () => {
        const provider = getSolanaProvider()
        if (!provider) {
            window.open("https://phantom.app/", "_blank")
            return
        }
        provider.connect({})
            .then(response => setAccount(response.publicKey.toString()))
            .catch(() => console.log("Phantom auth error"))
    }

    return (
        <button className="font-archivo font-semibold px-4 py-2 text-white opacity-90
                           bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl
                           hover:from-purple-300 hover:to-blue-500"
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