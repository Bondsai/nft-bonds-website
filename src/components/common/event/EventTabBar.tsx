import React from 'react';

const EventTabBar = () => {
    return (
        <div className="inline-flex bg-dark-gray rounded-2xl overflow-hidden">
            <div className="text-dark-gray opacity-100 px-7 py-2 font-semibold bg-gray-100 bg-opacity-85">Collected</div>
            <div className="text-white opacity-60 px-7 py-2 font-semibold ">Not collected</div>
            <div className="text-white opacity-60 px-7 py-2 font-semibold">All</div>

        </div>
    );
};

export default EventTabBar;