// import {program} from "../core/program";
// import {TOKEN_PROGRAM_ID} from "@solana/spl-token";
// import {findOfferAddress} from "../find";
// import {web3} from "@project-serum/anchor";
// import {PublicKey} from "@solana/web3.js";
//
//
// interface AcceptOfferParams {
//     eventAddress: PublicKey,
//     offerMakerAddress: PublicKey,
//     offerTakerAddress: PublicKey,
//     nftAddress: PublicKey,
//     tokenAddress: PublicKey,
//     offerMakerPlatformTokensTokenAccount: PublicKey,
//     index: number,
//     price: string
// }
//
// export const acceptOffer = async ({
//     eventAddress,
//     offerMakerAddress,
//     offerTakerAddress,
//     nftAddress,
//     tokenAddress,
//     offerMakerPlatformTokensTokenAccount
// }: AcceptOfferParams) => {
//
//     const {programAddress, bumpAddress} = await findOfferAddress(eventAddress, index)
//
//     const [escrowedTokensOfOfferMaker, escrowedTokensOfOfferMakerBump] = await web3.PublicKey.findProgramAddress(
//         [programAddress.toBuffer()],
//         program.programId
//     )
//
//     const tx = await program.rpc.acceptOffer(
//         {
//             accounts: {
//                 eventAccount: eventAddress,
//                 offer: programAddress,
//                 authority: offerMakerAddress,
//                 whoIsTakingTheOffer: offerTakerAddress,
//                 escrowedTokensOfOfferMaker: escrowedTokensOfOfferMaker,
//                 accountHoldingWhatMakerWillGet: offerMakerNftTokenAccount,
//                 accountHoldingWhatReceiverWillGive: offerTakerNftTokenAccount,
//                 accountHoldingWhatReceiverWillGet: offerTakerPlatformTokensTokenAccount,
//                 kindOfTokenWantedInReturn: nftMint.publicKey,
//                 tokenProgram: TOKEN_PROGRAM_ID,
//             },
//         }
//     );
// }

export const x = 'x'