import {web3, utils, getProvider} from '@project-serum/anchor';
import {PublicKey} from "@solana/web3.js";
import {program} from "../core";

interface CreateEventInputFields {
    name: string,
    duration: number,
    discount: number,
    accountId: string
}

const createEvent = async ({
    name,
    duration,
    discount,
    accountId
}: CreateEventInputFields) => {

    const creatorAccount = new PublicKey(accountId).toBuffer()

    const [eventAccount, eventAccountBump] = await web3.PublicKey.findProgramAddress(
        [
            utils.bytes.utf8.encode("event"),
            creatorAccount
        ],
        program.programId
    )

    return await program.rpc.createEvent(eventAccountBump, name, duration, discount, {
        accounts: {
            eventAccount: eventAccount,
            authority: getProvider().wallet.publicKey,
            systemProgram: web3.SystemProgram.programId,
        },
    })
}
