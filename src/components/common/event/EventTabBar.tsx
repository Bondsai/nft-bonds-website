import React from 'react';

export enum EventTab {
    AllNfts = "All",
    CollectedNfts = "Collected",
    NotCollectedNfts = "Not collected",
}

interface EventTabBarProps {
    activeTab: EventTab,
    setActiveTab: (tab: EventTab) => any
}

const EventTabBar = React.memo<EventTabBarProps>(({activeTab, setActiveTab}) => {

    const allTabs = [EventTab.AllNfts, EventTab.CollectedNfts, EventTab.NotCollectedNfts]

    return (
        <div className="inline-flex p-1 bg-dark-gray rounded-lg font-archivo overflow-hidden text-[16px]">
            {allTabs.map(tab => (
                <>
                    {tab === activeTab
                        ?
                        <button
                            className="text-dark-gray opacity-100 px-6 py-1 font-semibold rounded-md bg-gray-100 bg-opacity-85">
                            {tab}
                        </button>
                        :
                        <button className="text-white opacity-60 px-6 py-1 font-semibold"
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