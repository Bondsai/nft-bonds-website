// import React, {useEffect, useRef, useState} from 'react';
// import EventItem from "../components/common/EventItem";
// import {useObserver} from "../hooks/useObserver";
// import ExploreBondButton from "../components/common/buttons/ExploreBondButton";
// import {useFetching} from "../hooks/useFetching";
// import ExploreLoader from "../components/common/loader/ExploreLoader";
// import {getEvents, EVENTS} from "../API/MockEventsServer";
// import {useEventsQuery, Event} from "../API/graphql/generated/graphql";
//
// const ExploreEvents = () => {
//
//     const [items, setItems] = useState<any[]>([])
//     const [request, setRequest] = useState('')
//     const [activePage, setActivePage] = useState(true)
//     const lastElement: any = useRef()
//     const canLoad = items.length < EVENTS.length
//
//     const {data, loading, fetchMore} = useEventsQuery({
//         variables: {
//             offset: 0,
//             limit: 10
//         }
//     })
//
//     const events: Event[] = data?.events || []
//
//     const [fetchItems, isPostsLoading, postError] = useFetching(async () => {
//         const response = await getEvents(items.length)
//         setItems([...items, response])
//     })
//
//     console.log(events)
//
//     useObserver(lastElement, canLoad, isPostsLoading, async () => {
//         await fetchMore({
//             variables: {
//                 offset: events.length
//             }
//         })
//     })
//
//     useEffect(() => {
//         // fetchItems()
//     }, [])
//
//     const filteredItems = items.filter(item => item.owner.toLowerCase().includes(request.toLowerCase()))
//     const activeItems = filteredItems.filter(item => !item.isFinished)
//     const collectedItems = filteredItems.filter(item => item.isFinished)
//     const shownItems = activePage ? activeItems : collectedItems
//
//     return (
//         <div>
//             <hr className="bg-sol-white"/>
//             <div className="grid grid-rows-1 md:grid-cols-3 justify-center">
//                 <ExploreBondButton title="Active Events" onClick={() => setActivePage(true)}/>
//                 <ExploreBondButton title="Completed Events" onClick={() => setActivePage(false)}/>
//             </div>
//             <hr className="bg-sol-white"/>
//             <div
//                 className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center">
//                 {events.map(item => <EventItem item={item} key={item.id}/>)}
//             </div>
//             {isPostsLoading && <ExploreLoader/>}
//             {!canLoad && !isPostsLoading && shownItems.length === 0 &&
//                 <div className="flex justify-center text-sol-white text-6xl m-5">No items</div>}
//             <div ref={lastElement}/>
//         </div>
//     );
// };
//
// export default ExploreEvents;

export const x = 'x'