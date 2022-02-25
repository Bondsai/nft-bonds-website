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
import {Network} from "../../API/solana/core";

interface EventScreenProps {
    event: BondEvent,
}

const EventPage: React.FC<EventScreenProps> = ({
    event
}) => {

    const {tokens, fetching} = useAppSelector(state => state.eventPreview)
    const lastElement = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()

    // useObserver(lastElement, true, fetching, () => {
    //     dispatch(fetchEventTokens(tokenIDs))
    // })

    const tokenIDs = [
       "37XjTm7xpiBMSLAuQEuMzYYTJSowoGNgjSgKPQhUffzt"
    ]

    useEffect(() => {
        dispatch(fetchEventTokens(tokenIDs, Network.Devnet))
        return () => {
            dispatch(eventPreviewSlice.actions.reset())
        }
    }, [])

    console.log(tokens)


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
                <div className="">
                    <div className="flex flex-col gap-0 bg-gray-900 rounded-2xl
                                    px-[12px] md:px-[24px] overflow-hidden mb-10"
                    >
                        {tokens.map((token, index) =>
                            <>
                                <EventNftLine key={token.meta.pubkey.toString()}
                                              mintAddress={token.meta.data.mint}
                                              name={token.meta.data.data.name}
                                              isCollected={true}
                                              image={token.image}
                                />
                                {index !== tokens.length - 1 && <hr/>}
                            </>
                        )}
                    </div>
                    {/*{fetching*/}
                    {/*    ? <SmallLoader/>*/}
                    {/*    : <div ref={lastElement}/>*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};

export default EventPage;