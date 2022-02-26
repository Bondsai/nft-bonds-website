import {BN, utils, web3} from "@project-serum/anchor";
import {program} from "./core/program";
import {PublicKey} from "@solana/web3.js";

interface FindProgramResponse {
    programAddress: PublicKey,
    bumpAddress: number
}

export const findEventAddress = async (walletAddress: string | PublicKey): Promise<FindProgramResponse> => {
    const addressPublicKey = walletAddress instanceof PublicKey
        ? walletAddress
        : new PublicKey(walletAddress)

    const [programAddress, bumpAddress] = await web3.PublicKey.findProgramAddress(
        [
            utils.bytes.utf8.encode("event"),
            addressPublicKey.toBuffer()
        ],
        program.programId
    )
    return {programAddress, bumpAddress}
}

export const findOfferAddress = async (
    eventAddress: string | PublicKey,
    index: number
): Promise<FindProgramResponse> => {
    const eventAddressPublicKey = eventAddress instanceof PublicKey
        ? eventAddress
        : new PublicKey(eventAddress)

    const [programAddress, bumpAddress] = await web3.PublicKey.findProgramAddress(
        [
            utils.bytes.utf8.encode("offer"),
            eventAddressPublicKey.toBuffer(),
            new BN(index).toArrayLike(Buffer)
        ],
        program.programId
    )

    return {programAddress, bumpAddress}
}
