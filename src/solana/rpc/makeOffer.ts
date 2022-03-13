import {program} from "../core/program";
import {BN, web3} from "@project-serum/anchor";
import {PublicKey, Signer} from "@solana/web3.js";
import {findAssociatedTokenAddress, findOfferAddress} from "../find";
import {Token, TOKEN_PROGRAM_ID} from "@solana/spl-token";

interface MakeOfferParams {
    eventAddress: PublicKey,
    offerMakerAddress: PublicKey,
    nftAddress: PublicKey,
    tokenAddress: PublicKey,
    index: number,
    price: string | number
}

export const makeOffer = async ({
    eventAddress,
    offerMakerAddress,
    tokenAddress,
    nftAddress,
    index,
    price
}: MakeOfferParams) => {

    const {programAddress, bumpAddress} = await findOfferAddress(eventAddress, index)

    const [escrowedTokensOfOfferMaker, escrowedTokensOfOfferMakerBump] = await web3.PublicKey.findProgramAddress(
        [programAddress.toBuffer()],
        program.programId
    )

    const offerMakerPlatformTokensTokenAccount = await findAssociatedTokenAddress(offerMakerAddress, tokenAddress)
    //const _ = await createOrFindAssociatedAccount(offerMakerAddress, nftAddress)


    // console.log("MAKE_OFFER")
    // console.log("eventAddress:", eventAddress.toString())
    // console.log("programAddress:",programAddress.toString())
    // console.log("offerMakerAddress:", offerMakerAddress.toString())
    // console.log("offerMakerPlatformTokensTokenAccount:",offerMakerPlatformTokensTokenAccount.toString())
    // console.log("escrowedTokensOfOfferMaker:", escrowedTokensOfOfferMaker.toString())
    // console.log("tokenAddress:",tokenAddress.toString())
    // console.log("nftAddress:",nftAddress.toString())
    // console.log(TOKEN_PROGRAM_ID)

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

export const createTokenInstance = async (tokenAddress: PublicKey, payer: Signer) => {

    return new Token(
        program.provider.connection,
        tokenAddress,
        TOKEN_PROGRAM_ID,
        payer
    )
};
//
// export const createOrFindAssociatedAccount = async (walletAddress: PublicKey, tokenAddress: PublicKey) => {
//     return findAssociatedTokenAddress(walletAddress, tokenAddress)
//         .then(response => response)
//         .catch(async () => {
//             console.log("#_CREATE:", walletAddress.toString(), tokenAddress.toString())
//             const token = await createTokenInstance(tokenAddress)
//             console.log(token.publicKey.toString())
//             return await token.createAssociatedTokenAccount(walletAddress)
//         })
// }

export const createOrFindAssociatedAccount2 = async (walletAddress: PublicKey, tokenAddress: PublicKey, payer: Signer) => {
    console.log("CREATE:", walletAddress.toString(), tokenAddress.toString())
    const token = await createTokenInstance(tokenAddress, payer)
    console.log(token.publicKey.toString())
    console.log(token)
    return await token.getOrCreateAssociatedAccountInfo(walletAddress)
}