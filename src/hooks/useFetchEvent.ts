import {useEffect, useState} from "react";
import {EventResponse, getEvent} from "../solana/rpc/getEvent";

export interface EventHookResponse {
    fetching: boolean,
    event?: EventResponse
}

export const useFetchEvent = (eventAddress?: string) => {

    const [event, setEvent] = useState<EventHookResponse>({
        fetching: true
    })

    useEffect(() => {
        if (!eventAddress) return
        getEvent(eventAddress)
            .then(event => setEvent({
                fetching: false,
                event
            }))
            .catch(() => setEvent({
                fetching: false
            }))
    }, [eventAddress])

    return event
}