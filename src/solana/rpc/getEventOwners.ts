import {program} from "../core/program";
import {baseAccount} from "../core/baseAccount";
import {PublicKey} from "@solana/web3.js";

export interface EventOwnersResponse {
    owners: PublicKey[]
}

export const getEventOwners = async (): Promise<EventOwnersResponse> => {
    const response = await program.account.baseAccount.fetch(baseAccount.publicKey) as any
    return {owners: response.hashes}
}