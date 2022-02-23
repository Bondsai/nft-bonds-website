import {useEffect} from "react";
import {solanaProvider} from "../solana/core";

export const useWalletConnection = (
    onSuccess: (publicKey: string) => any,
    onFailure: () => any
) => {
    useEffect(() => {
        const onLoad = async () => {
            const provider = solanaProvider()
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
