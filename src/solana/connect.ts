import {solanaProvider} from "./core";

// Returns User public key
export const connect2Phantom = async () => {
    const provider = solanaProvider()
    const response = await provider.connect()
    return response.publicKey.toString();
}
