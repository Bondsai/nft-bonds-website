import React, {useState} from 'react';
import EventItem from "../components/common/EventItem";

const ExploreBonds = () => {

    const count = 20

    return (
        <div>
            <div className="text-sol-green p-40 text-3xl font-bold">Navbar</div>
            <hr className="bg-sol-white"/>
            <div className="grid grid-rows-1 md:grid-cols-2 justify-center">
                <div
                    className="text-3xl text-sol-white justify-center text-center mx-40 p-5 hover:bg-sol-gray-light rounded-lg">
                    Active Events
                </div>
                <div className="text-3xl text-sol-white mx-40 p-5 text-center hover:bg-sol-gray-light rounded-lg">
                    Completed Events
                </div>
            </div>
            <hr className="bg-sol-white"/>
            <div
                className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
            </div>
        </div>
    );
};

export default ExploreBonds;