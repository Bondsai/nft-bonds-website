import {useEffect} from "react";
import {getSolanaProvider} from "../solana/wallet/provider";

export const useWalletConnection = (
    onSuccess: (publicKey: string) => any,
    onFailure: () => any
) => {
    useEffect(() => {
        const onLoad = async () => {
            const provider = getSolanaProvider()
            provider?.connect({
                onlyIfTrusted: true
            }).then((response: any) => {
                    onSuccess(response.publicKey.toString())
                }
            ).catch(onFailure)
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, []);
}
