import React from 'react';
import EventPage from "./EventPage";
import {useParams} from "react-router-dom";
import ExploreLoader from "../../components/common/loader/ExploreLoader";
import NotFoundPage from "../NotFoundPage";
import {useFetchEvent} from "../../hooks/useFetchEvent";

type RouterParams = {
    eventAccount: string
}

const EventFetcher = () => {
    const {eventAccount} = useParams<RouterParams>()
    const {event, fetching} = useFetchEvent(eventAccount)

    if (fetching) {
        return <ExploreLoader/>
    }

    if (!event) {
        return <NotFoundPage/>
    }

    return <EventPage event={event}/>
};

export default EventFetcher;