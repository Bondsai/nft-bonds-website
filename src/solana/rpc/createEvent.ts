import {web3} from '@project-serum/anchor';
import {PublicKey} from "@solana/web3.js";
import {program} from "../core/program";
import {findEventAddress} from "../find";

interface CreateEventInputFields {
    offerMaker: PublicKey
    name: string
    duration: number
    discount: number
    vesting: number
    accountId: string
    tokenAddress: string
}

const createEvent = async ({
    offerMaker,
    name,
    duration,
    discount,
    vesting,
    tokenAddress,
}: CreateEventInputFields) => {

    const {programAddress, bumpAddress} = await findEventAddress(offerMaker)

    return await program.rpc.createEvent(bumpAddress, name, duration, discount, vesting, new PublicKey(tokenAddress), {
        accounts: {
            authority: offerMaker,
            eventAccount: programAddress,
            systemProgram: web3.SystemProgram.programId,
        }
    })
}
