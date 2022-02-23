import React from 'react';
import {BondEvent} from "../../models/BondEvent";
import EventPage from "./EventPage";

const EventFetcher = () => {
    const event: BondEvent = {
        name: "First bond aggregation",
        total: 100,
        collected: 100,
        vestingPeriod: 7
    }
    return <EventPage event={event}/>
};

export default EventFetcher;