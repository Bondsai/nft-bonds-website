import React, {useEffect, useRef, useState} from 'react';

import InfoBlock from "../../components/common/event/info/InfoBlock";
import EventTitle from "../../components/common/event/EventTitle";
import {BondEvent} from "../../models/BondEvent";
import TokenSearchInput from "../../components/common/event/search/TokenSearchInput";
import EventTabBar, {EventTab} from "../../components/common/event/EventTabBar";
import EventNftLine from "../../components/common/nft/EventNftLine";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchEventTokens} from "../../store/event/thunk";
import {eventPreviewSlice} from "../../store/event/preview";
import SmallLoader from "../../components/common/loader/SmallLoader";
import {useObserver} from "../../hooks/useObserver";

interface EventScreenProps {
    event: BondEvent,
}

const EventPage: React.FC<EventScreenProps> = ({
    event
}) => {

    const {tokens, fetching} = useAppSelector(state => state.eventPreview)
    const lastElement = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()

    useObserver(lastElement, true, fetching, () => {
        dispatch(fetchEventTokens(tokenIDs))
    })

    const tokenIDs = [
        "7mRLptNjdyiZxH8d3UHrRLKr5iynDrkJKma5pGeC2v7d",
        "4ZpmXp6DX4cLmA8VXqMqtBUuxDN54nGGLj1mPYZW5fsX",
        "AHQvc5Bx6WVKsPBL87trDiqnK7hZmoiUFJf86Z7PHpfJ",
        "4ZSBBq45UJAEsTdURF1TCT46kFaHEuHMVokKRcwWeA3p",
        "3LV9XMAjmudCLXmi8Kz3m4aCYzcdHhbXhcv4Jh4McuDN",
        "8GXjyDHa5Y2JvAb5TBuikFaRi5ytk8sx378zwTszYfhn",
        "BLpMuVYaiPC5tYjPee7WvbHyCkbQmPyviBA9s5c8bLRC",
    ]

    useEffect(() => {
        dispatch(fetchEventTokens(tokenIDs))
        return () => {
            dispatch(eventPreviewSlice.actions.reset())
        }
    }, [])


    const [searchTokenId, setSearchTokenId] = useState('')
    const [activeTab, setActiveTab] = useState(EventTab.AllNfts)

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col pt-[50px] px-4 justify-center max-w-max mx-auto gap-8 md:gap-14">
                <div>
                    <EventTitle title={event.name}/>
                    <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-5">
                        <InfoBlock endTimestamp={1} discount={20}/>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-[20px]">
                    <EventTabBar activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                <div className="space-y-2">
                    <div className="pl-2 text-white font-archivo font-bold">Filter</div>
                    <TokenSearchInput tokenId={searchTokenId} setTokenId={setSearchTokenId}/>
                </div>
                <div className="mb-[30px]">
                    <div className="flex flex-col gap-0 bg-dark-gray rounded-2xl
                                    px-[12px] md:px-[24px] overflow-hidden mb-10"
                    >
                        {tokens.map((token, index) =>
                            <>
                                <EventNftLine key={token.meta.pubkey.toString()}
                                              name={token.meta.data.data.name}
                                              isCollected={true}
                                              image={token.image}
                                />
                                {index !== tokens.length - 1 && <hr/>}
                            </>
                        )}
                    </div>
                    {fetching
                        ? <SmallLoader/>
                        : <div ref={lastElement}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default EventPage;