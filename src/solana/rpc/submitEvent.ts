import {program} from "../core/program";
import {baseAccount} from "../core/baseAccount";
import {PublicKey} from "@solana/web3.js";

export const submitEvent = async (eventAccount: PublicKey) => {
    return await program.rpc.submitEvent(
        {
            accounts: {
                baseAccount: baseAccount.publicKey,
                eventAccount: eventAccount
            }
        }
    );
}