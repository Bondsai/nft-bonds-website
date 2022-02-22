import React from 'react';
import {BondEvent} from "../../models/bondEvent";
import EventPage from "./EventPage";

const EventFetcher = () => {
    const event: BondEvent = {
        name: "First bond aggregation",
        total: 100,
        collected: 10,
        vestingPeriod: 7
    }
    return <EventPage event={event}/>
};

export default EventFetcher;