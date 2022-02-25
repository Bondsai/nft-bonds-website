import {program} from "../core";

interface EventResponse {

}

export const getEvent = async (eventAccount: string): Promise<EventResponse> => {
    const eventAccountInfo = await program.account.eventAccount.fetch(eventAccount)
    return eventAccountInfo
}