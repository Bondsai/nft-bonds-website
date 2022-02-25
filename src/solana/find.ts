import {utils, web3} from "@project-serum/anchor";
import {program} from "./core/program";
import {PublicKey} from "@solana/web3.js";

export const findEventAddress = async (walletAddress: string | PublicKey) => {
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
