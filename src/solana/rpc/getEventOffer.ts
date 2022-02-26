import {PublicKey} from "@solana/web3.js";
import {BN} from "@project-serum/anchor";
import {findEventAddress, findOfferAddress} from "../find";
import {NETWORK, program} from "../core/program";
import {getNFT, ImageTokenMetadata} from "../requests";

export interface EventOfferResponse {
    authority: PublicKey
    isCollected: boolean
    amountOfOfferedTokens: BN
    kindOfTokenWantedInReturn: PublicKey
    escrowedTokensOfOfferMakerBump: number
    bump: number
}

export interface NftOfferResponse {
    offer: EventOfferResponse,
    token: ImageTokenMetadata
}

export const getEventOffer = async (
    eventAddress: string | PublicKey,
    index: number
): Promise<EventOfferResponse> => {
    const {programAddress} = await findOfferAddress(eventAddress, index)
    return await program.account.offerAccount.fetch(programAddress) as any
}

export const getEventOfferWithNFT = async (
    eventAddress: string | PublicKey,
    index: number
): Promise<NftOfferResponse> => {
    const offer = await getEventOffer(eventAddress, index)
    const token = await getNFT(offer.kindOfTokenWantedInReturn.toString(), NETWORK)
    return {offer, token}
}