import {program} from "../core/program";
import {TOKEN_PROGRAM_ID} from "@solana/spl-token";
import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {web3} from "@project-serum/anchor";
import {createOrFindAssociatedAccount2} from "./makeOffer";
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

    const payer1 = web3.Keypair.generate();
    await program.provider.connection.confirmTransaction(
        await program.provider.connection.requestAirdrop(payer1.publicKey, LAMPORTS_PER_SOL)
    );

    const offerTakerPlatformTokensTokenAccount = (await createOrFindAssociatedAccount2(offerTaker, tokenAddress, payer1)).address
    const offerTakerNftTokenAccount = await findAssociatedTokenAddress(offerTaker, nftMintAccount)
    const offerMakerNftTokenAccount = (await createOrFindAssociatedAccount2(authorityAccount, nftMintAccount, payer1)).address

    // console.log("ACCEPT_OFFER")
    // console.log("eventAccount:", eventAccount.toString())
    // console.log("offerAccount:", offerAccount.toString())
    // console.log("authorityAccount:",authorityAccount.toString())
    // console.log("offerTaker:", offerTaker.toString())
    // console.log("escrowedTokensOfOfferMaker:",escrowedTokensOfOfferMaker.toString())
    // console.log("offerMakerNftTokenAccount:", offerMakerNftTokenAccount.toString())
    // console.log("offerTakerNftTokenAccount:",offerTakerNftTokenAccount.toString())
    // console.log("offerTakerPlatformTokensTokenAccount:",offerTakerPlatformTokensTokenAccount.toString())
    // console.log("nftMintAccount:",nftMintAccount.toString())
    // console.log(TOKEN_PROGRAM_ID)

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