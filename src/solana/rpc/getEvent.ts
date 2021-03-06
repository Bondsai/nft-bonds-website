import {program} from "../core/program";
import {findEventAddress} from "../find";
import {PublicKey} from "@solana/web3.js";
import {BN} from "@project-serum/anchor";

export interface EventResponse {
    authority: PublicKey
    token: PublicKey
    eventAddress: PublicKey
    bump: number
    collectedTokensAmount: BN
    duration: number
    fullTokensAmount: BN
    isOpened: boolean
    percent: number
    startTime: BN
    title: string
    collectedNfts: number
    totalNfts: number
    vestingTime: number,
}

export const getEvent = async (walletAccount: string | PublicKey): Promise<EventResponse> => {
    const {programAddress} = await findEventAddress(walletAccount)
    const response = await program.account.eventAccount.fetch(programAddress) as EventResponse
    return {...response, eventAddress: programAddress}
}
