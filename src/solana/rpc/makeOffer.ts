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

export const createOrFindAssociatedAccount2 = async (walletAddress: PublicKey, tokenAddress: PublicKey, payer: Signer) => {
    const token = await createTokenInstance(tokenAddress, payer)
    return await token.getOrCreateAssociatedAccountInfo(walletAddress)
}