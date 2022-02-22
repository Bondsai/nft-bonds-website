import React from 'react';
import EventAbout from "../components/common/event/EventDescription";
import EventLogo from "../components/common/event/EventLogo";
import CollectedBar from "../components/common/event/CollectedBar";

const MOCK_LOGO = "https://solana.com/_next/image?url=%2Fapi%2Fprojectimg%2Fckwgwiiwq37771eysxdy9y46jc%3Ftype%3DLOGO%26contentType%3D%22image%2Fpng%22&w=1920&q=75"

interface EventScreenProps {

}

const EventScreen: React.FC<EventScreenProps> = () => {
    return (
        <div className="px-4 flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center mb-10">
                <EventLogo link={MOCK_LOGO}/>
                <EventAbout title="Qar Thunder"
                            description="War thunder is big Belarus company that allow you to play Tank games"
                />
            </div>
            <CollectedBar collected={200} total={200}/>
        </div>
    );
};

export default EventScreen;