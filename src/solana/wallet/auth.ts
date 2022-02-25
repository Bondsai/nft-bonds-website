import {getSolanaProvider} from "./provider";

// Returns User public key
export const connect2Phantom = async () => {
    const provider = getSolanaProvider()
    const response = await provider?.connect({})
    return response?.publicKey.toString();
}

export const disconnect = async () => {
    const response = await getSolanaProvider()?.disconnect()
    console.log(response)
}
