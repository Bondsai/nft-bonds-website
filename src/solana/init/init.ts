import {program} from "../core/program";
import {baseAccount} from "../core/baseAccount";
import {SystemProgram} from "@solana/web3.js";

export const initBaseAccount = async () => {
    return await program.rpc.initialize({
        accounts: {
            baseAccount: baseAccount.publicKey,
            // authority: "BMsD1cuyL2npJk3CSkEKwY9FByWhWcbcwYZ8h9Prj1Lt",
            authority: baseAccount.publicKey,
            systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
    });
}