import React, {useEffect} from 'react';
import EventPage from "./EventPage";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchEventData} from "../../store/event/thunk";
import ExploreLoader from "../../components/common/loader/ExploreLoader";
import NotFoundPage from "../NotFoundPage";

type RouterParams = {
    userAccount: string
}

const EventFetcher = () => {
    const {userAccount} = useParams<RouterParams>()
    const dispatch = useAppDispatch()
    const {event, fetching} = useAppSelector(state => state.eventPreview)

    useEffect(() => {
        if (userAccount) {
            dispatch(fetchEventData(userAccount))
        }
    }, [])

    if (fetching) {
        return <ExploreLoader/>
    }

    if (!event) {
        return <NotFoundPage/>
    }

    return <EventPage event={event}/>
};

export default EventFetcher;