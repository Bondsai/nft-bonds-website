import {PublicKey} from "@solana/web3.js";
import {BN, utils, web3} from "@project-serum/anchor";
import {NETWORK, program} from "../core/program";
import {getNFT, ImageTokenMetadata} from "../requests";
import {findEventAddress, findOfferAddress} from "../find";

export interface EventOfferResponse {
    authority: PublicKey
    isCollected: boolean
    amountOfOfferedTokens: BN
    kindOfTokenWantedInReturn: PublicKey
    escrowedTokensOfOfferMakerBump: number
    bump: number
    offerAccount: PublicKey
}

export interface NftOfferResponse {
    offer: EventOfferResponse,
    token: ImageTokenMetadata
}

export const getEventOffer = async (
    eventAddress: PublicKey,
    index: number
): Promise<EventOfferResponse> => {
    const {programAddress} = await findOfferAddress(eventAddress, index)
    const response = await program.account.offer.fetch(programAddress) as EventOfferResponse
    return {...response, offerAccount: programAddress}
}

export const getEventOfferWithNFT = async (
    authority: PublicKey,
    index: number
): Promise<NftOfferResponse> => {
    const {programAddress} = await findEventAddress(authority)
    const offer = await getEventOffer(programAddress, index)
    const token = await getNFT(offer.kindOfTokenWantedInReturn.toString(), NETWORK)
    return {offer, token}
}