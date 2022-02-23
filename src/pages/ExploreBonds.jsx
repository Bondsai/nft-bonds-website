import React, {useRef, useState} from 'react';
import EventItem from "../components/common/EventItem";
import {useObserver} from "../hooks/useObserver";
import SearchInput from "../components/common/input/SearchInput";

const ExploreBonds = () => {

    const [items, setItems] = useState([
        {id: 1, value: true},
        {id: 2, value: false},
        {id: 3, value: true},
        {id: 4, value: true},
        {id: 5, value: false},
        {id: 6, value: false},
        {id: 7, value: false},
        {id: 8, value: true},
        {id: 9, value: false},
        {id: 10, value: false},
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [request, setRequest] = useState('')
    const lastElement = useRef()

    useObserver(lastElement, true, isLoading, () => {
        setIsLoading(true)
        const lastId = items[items.length - 1].id
        const newItems = [
            {id: lastId + 1, value: true},
            {id: lastId + 2, value: false},
            {id: lastId + 3, value: true},
            {id: lastId + 4, value: true},
            {id: lastId + 5, value: false}
        ]
        setIsLoading(false)
        setItems([...items, ...newItems])
    })

    return (
        <div>
            <div className="text-sol-green p-40 text-3xl font-bold">Navbar</div>
            <hr className="bg-sol-white"/>
            <div className="grid grid-rows-1 md:grid-cols-3 justify-center">
                <button
                    className="text-2xl text-sol-white justify-center text-center mx-40 p-5 hover:bg-sol-gray-light rounded-lg"
                >
                    Active Events
                </button>
                <button
                    className="text-2xl text-sol-white mx-40 p-5 text-center hover:bg-sol-gray-light rounded-lg"
                >
                    Completed Events
                </button>
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
                {items.map(item =>
                    <EventItem defaultIsFinished={item.value}
                               key={item.id}
                    />
                )}
            </div>
            <div ref={lastElement}/>
        </div>);
};

export default ExploreBonds;