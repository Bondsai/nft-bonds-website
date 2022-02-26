import {program} from "../core/program";
import {BN, web3} from "@project-serum/anchor";
import {PublicKey} from "@solana/web3.js";
import {findOfferAddress} from "../find";
import {TOKEN_PROGRAM_ID} from "@solana/spl-token";

interface MakeOfferParams {
    eventAddress: PublicKey,
    offerMakerAddress: PublicKey,
    nftAddress: PublicKey,
    tokenAddress: PublicKey,
    offerMakerPlatformTokensTokenAccount: PublicKey,
    index: number,
    price: string
}

export const makeOffer = async ({
    eventAddress,
    offerMakerAddress,
    tokenAddress,
    nftAddress,
    offerMakerPlatformTokensTokenAccount,
    index,
    price
}: MakeOfferParams) => {

    const {programAddress, bumpAddress} = await findOfferAddress(eventAddress, index)

    const [escrowedTokensOfOfferMaker, escrowedTokensOfOfferMakerBump] = await web3.PublicKey.findProgramAddress(
        [programAddress.toBuffer()],
        program.programId
    )

    await program.rpc.makeOffer(
        bumpAddress,
        escrowedTokensOfOfferMakerBump,
        new BN(price),
        {
            accounts: {
                eventAccount: eventAddress,
                offer: programAddress,
                authority: offerMakerAddress,
                tokenAccountFromWhoMadeTheOffer: offerMakerPlatformTokensTokenAccount,
                escrowedTokensOfOfferMaker,
                kindOfTokenOffered: tokenAddress,
                kindOfTokenWantedInReturn: nftAddress,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: web3.SystemProgram.programId,
                rent: web3.SYSVAR_RENT_PUBKEY
            }
        }
    )
}


// export const initEvent = (tokenAddress: PublicKey, offerMaker: PublicKey) => {
//     return await tokenAddress.createAssociatedTokenAccount(
//         offerMaker
//     )
// }