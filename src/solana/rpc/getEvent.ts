import {program} from "../core/program";
import {findEventAddress} from "../find";
import {PublicKey} from "@solana/web3.js";
import {BN, Idl, IdlTypes} from "@project-serum/anchor";
import {TypeDef} from "@project-serum/anchor/dist/cjs/program/namespace/types";
import {IdlTypeDef} from "@project-serum/anchor/dist/cjs/idl";

export interface EventResponse {
    authority: PublicKey
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
    vestingTime: number
}

export const getEvent = async (walletAccount: string | PublicKey): Promise<EventResponse> => {
    const {programAddress} = await findEventAddress(walletAccount)
    return await program.account.eventAccount.fetch(programAddress) as any
}
