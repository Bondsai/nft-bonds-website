export const makeOffer = () => {

    // const [offer, offerBump] = await anchor.web3.PublicKey.findProgramAddress(
    //     [
    //         anchor.utils.bytes.utf8.encode("offer"),
    //         eventAccount.toBuffer(),
    //         new anchor.BN(0).toArrayLike(Buffer)
    //     ],
    //     program.programId
    // )
    //
    // const [escrowedTokensOfOfferMaker, escrowedTokensOfOfferMakerBump] = await anchor.web3.PublicKey.findProgramAddress(
    //     [offer.toBuffer()],
    //     program.programId
    // )
    //
    // await program.rpc.makeOffer(
    //     offerBump,
    //     escrowedTokensOfOfferMakerBump,
    //     new anchor.BN(TOKENS_OFFER_AMOUNT),
    //     {
    //         accounts: {
    //             eventAccount: eventAccount,
    //             offer: offer,
    //             authority: offerMaker.publicKey,
    //             tokenAccountFromWhoMadeTheOffer: offerMakerPlatformTokensTokenAccount,
    //             escrowedTokensOfOfferMaker: escrowedTokensOfOfferMaker,
    //             kindOfTokenOffered: platformTokensMint.publicKey,
    //             kindOfTokenWantedInReturn: nftMint.publicKey,
    //             tokenProgram: spl.TOKEN_PROGRAM_ID,
    //             systemProgram: anchor.web3.SystemProgram.programId,
    //             rent: anchor.web3.SYSVAR_RENT_PUBKEY
    //         }
    //     }
    // );
}