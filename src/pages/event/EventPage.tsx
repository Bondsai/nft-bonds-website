import React from 'react';

import InfoBlock from "../../components/common/event/info/InfoBlock";
import EventTitle from "../../components/common/event/EventTitle";
import {BondEvent} from "../../models/BondEvent";
import CollectedBar from "../../components/common/event/CollectedBar";

const MOCK_LOGO = "https://solana.com/_next/image?url=%2Fapi%2Fprojectimg%2Fckwgwiiwq37771eysxdy9y46jc%3Ftype%3DLOGO%26contentType%3D%22image%2Fpng%22&w=1920&q=75"

interface EventScreenProps {
    event: BondEvent,
}

const EventPage: React.FC<EventScreenProps> = ({
    event
}) => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col pt-[50px] px-4 max-w-max mx-auto">
                <div className="mb-10">
                    <EventTitle title={event.name}/>
                    <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-5">
                        <InfoBlock endTimestamp={1} discount={20}/>
                    </div>
                </div>
                <CollectedBar collected={event.collected}
                              total={event.total}
                />
            </div>
        </div>
    );
};

export default EventPage;