import React, {useEffect, useRef, useState} from 'react';
import EventItem from "../components/common/EventItem";
import {useObserver} from "../hooks/useObserver";
import SearchInput from "../components/common/input/SearchInput";
import ExploreBondButton from "../components/common/buttons/ExploreBondButton";
import {useFetching} from "../hooks/useFetching";
import ExploreLoader from "../components/common/loader/ExploreLoader";
import {getEvents, EVENTS} from "../API/MockEventsServer";

const ExploreBonds = () => {

    const [items, setItems] = useState([])
    const [request, setRequest] = useState('')
    const [activePage, setActivePage] = useState(true)
    const lastElement = useRef()
    const canLoad = items.length < EVENTS.length

    const [fetchItems, isPostsLoading, postError] = useFetching(async () => {
        const response = await getEvents(items.length)
        setItems([...items, response])
    })
    
    useObserver(lastElement, canLoad, isPostsLoading, () => {
        fetchItems()
    })

    useEffect(() => {
        fetchItems()
    }, [])

    const filteredItems = items.filter(item => item.owner.toLowerCase().includes(request.toLowerCase()))
    const activeItems = filteredItems .filter(item => !item.isFinished)
    const collectedItems = filteredItems .filter(item => item.isFinished)
    const shownItems = activePage ? activeItems : collectedItems

    return (
        <div>
            <hr className="bg-sol-white"/>
            <div className="grid grid-rows-1 md:grid-cols-3 justify-center">
                <ExploreBondButton title="Active Events" onClick={_ => setActivePage(true)}/>
                <ExploreBondButton title="Completed Events" onClick={_ => setActivePage(false)}/>
                <SearchInput
                    value={request}
                    onChange={e => setRequest(e.target.value)}
                    type='text'
                    placeholder="Search company..."
                />
            </div>
            <hr className="bg-sol-white"/>
            <div
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center">
                {shownItems.map(item => <EventItem item={item} key={item.id}/>)}
            </div>
            {isPostsLoading && <ExploreLoader/>}
            {!canLoad && !isPostsLoading && shownItems.length === 0 &&
                <div className="flex justify-center text-sol-white text-6xl m-5">No items</div>}
            <div ref={lastElement}/>
        </div>
    );
};

export default ExploreBonds;