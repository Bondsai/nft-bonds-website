import React from 'react';

export enum EventTab {
    AllNfts = "All",
    CollectedNfts = "Collected",
    NotCollectedNfts = "Not collected",
    Active = "Active Events",
    Collected = "Completed Events"
}

interface EventTabBarProps {
    activeTab: EventTab,
    setActiveTab: (tab: EventTab) => any,
    allTabs: Array<EventTab>,
}

const EventTabBar = React.memo<EventTabBarProps>(({activeTab, setActiveTab, allTabs}) => {

    return (
        <div className="inline-flex p-1 bg-gray-900 rounded-lg font-archivo overflow-hidden text-[14px]">
            {allTabs.map(tab => (
                <>
                    {tab === activeTab
                        ?
                        <button
                            className="text-gray-900 opacity-100 px-6 py-[6px] font-semibold rounded-md bg-gray-300 bg-opacity-85">
                            {tab}
                        </button>
                        :
                        <button className="text-white opacity-60 px-6 py-[6px] font-semibold"
                                onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    }
                </>
            ))}
        </div>
    );
});

export default EventTabBar;