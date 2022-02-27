import {program} from "../core/program";
import {TOKEN_PROGRAM_ID} from "@solana/spl-token";
import {PublicKey} from "@solana/web3.js";
import {web3} from "@project-serum/anchor";
import {createOrFindAssociatedAccount} from "./makeOffer";
import {findAssociatedTokenAddress} from "../find";

export interface AcceptOfferParams {
    offerAccount: PublicKey,
    authorityAccount: PublicKey,
    eventAccount: PublicKey,
    offerTaker: PublicKey,
    tokenAddress: PublicKey,
    nftMintAccount: PublicKey
}

export const acceptOffer = async ({
    authorityAccount,
    offerAccount,
    eventAccount,
    offerTaker,
    tokenAddress,
    nftMintAccount
}: AcceptOfferParams) => {

    const [escrowedTokensOfOfferMaker] = await web3.PublicKey.findProgramAddress(
        [offerAccount.toBuffer()],
        program.programId
    )

    const offerMakerNftTokenAccount = await findAssociatedTokenAddress(authorityAccount, nftMintAccount)
    const offerTakerNftTokenAccount = await createOrFindAssociatedAccount(offerTaker, nftMintAccount)
    const offerTakerPlatformTokensTokenAccount = await createOrFindAssociatedAccount(offerTaker, tokenAddress)

    // console.log(offerMakerNftTokenAccount, offerTakerNftTokenAccount, offerTakerPlatformTokensTokenAccount, offerAccount, toke)
    console.log(offerMakerNftTokenAccount.toString())
    console.log(offerTakerNftTokenAccount.toString())
    console.log(offerTakerPlatformTokensTokenAccount.toString())
    console.log(escrowedTokensOfOfferMaker.toString())
    console.log(authorityAccount.toString())

    return await program.rpc.acceptOffer(
        {
            accounts: {
                eventAccount: eventAccount,
                offer: offerAccount,
                authority: authorityAccount,
                whoIsTakingTheOffer: offerTaker,
                escrowedTokensOfOfferMaker,
                accountHoldingWhatMakerWillGet: offerMakerNftTokenAccount,
                accountHoldingWhatReceiverWillGive: offerTakerNftTokenAccount,
                accountHoldingWhatReceiverWillGet: offerTakerPlatformTokensTokenAccount,
                kindOfTokenWantedInReturn: nftMintAccount,
                tokenProgram: TOKEN_PROGRAM_ID,
            }
        }
    )
}