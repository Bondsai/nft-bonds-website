import React, {useEffect, useState} from 'react';

import InfoBlock from "../../components/common/event/info/InfoBlock";
import EventTitle from "../../components/common/event/EventTitle";
import {BondEvent} from "../../models/BondEvent";
import TokenSearchInput from "../../components/common/event/search/TokenSearchInput";
import EventTabBar, {EventTab} from "../../components/common/event/EventTabBar";
import {getMetadata, getNFT} from "../../API/solana/requests";

const MOCK_LOGO = "https://solana.com/_next/image?url=%2Fapi%2Fprojectimg%2Fckwgwiiwq37771eysxdy9y46jc%3Ftype%3DLOGO%26contentType%3D%22image%2Fpng%22&w=1920&q=75"

interface EventScreenProps {
    event: BondEvent,
}

const EventPage: React.FC<EventScreenProps> = ({
    event
}) => {

    useEffect(() => {
        console.log("GET")
        getNFT("7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d").then(console.log)
    }, [])

    const [searchTokenId, setSearchTokenId] = useState('')
    const [activeTab, setActiveTab] = useState(EventTab.AllNfts)

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col pt-[50px] px-4 max-w-max mx-auto gap-8 md:gap-14">
                <div>
                    <EventTitle title={event.name}/>
                    <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-5">
                        <InfoBlock endTimestamp={1} discount={20}/>
                    </div>
                </div>
                {/*<CollectedBar collected={event.collected}*/}
                {/*              total={event.total}*/}
                {/*/>*/}
                <div className="w-full flex justify-center mt-[20px]">
                    <EventTabBar activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                <div className="space-y-2">
                    <div className="pl-2 text-white font-archivo font-bold">Filter</div>
                    <TokenSearchInput tokenId={searchTokenId} setTokenId={setSearchTokenId}/>
                </div>
            </div>
        </div>
    );
};

export default EventPage;