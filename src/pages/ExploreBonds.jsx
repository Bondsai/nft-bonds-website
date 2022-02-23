import React, {useEffect, useRef, useState} from 'react';
import EventItem from "../components/common/EventItem";
import {useObserver} from "../hooks/useObserver";
import SearchInput from "../components/common/input/SearchInput";
import ExploreBondButton from "../components/common/buttons/ExploreBondButton";
import ServiceDB from "../API/ServiceDB";
import {useFetching} from "../hooks/useFetching";
import ExploreLoader from "../components/common/loader/ExploreLoader";

const ExploreBonds = () => {

    const [items, setItems] = useState([])
    const [request, setRequest] = useState('')
    const [page, setPage] = useState(1)
    const [activePage, setActivePage] = useState(true)
    const lastElement = useRef()
    const canLoad = page < 20

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await ServiceDB.getFivePost(items.length === 0 ? 0 : items[items.length - 1].id)
        setItems([...items, ...response])
    })

    useObserver(lastElement, canLoad, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(request.toLowerCase()))
    const activeItems = filteredItems .filter(item => !item.isFinished)
    const collectedItems = filteredItems .filter(item => item.isFinished)
    const shownItems = activePage ? activeItems : collectedItems

    return (<div>
        <hr className="bg-sol-white mt-[18px]"/>
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
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
            {shownItems.map(item => <EventItem item={item} key={item.id}/>)}
        </div>
        {isPostsLoading && <ExploreLoader/>}
        {!canLoad && !isPostsLoading && shownItems.length===0 && <div className="flex justify-center text-sol-white text-6xl m-5">No items</div> }
        <div ref={lastElement}/>
    </div>);
};

export default ExploreBonds;