import React, {useEffect, useRef, useState} from 'react';
import InfoBlock from "../../components/common/event/info/InfoBlock";
import EventTitle from "../../components/common/event/EventTitle";
import TokenSearchInput from "../../components/common/event/search/TokenSearchInput";
import EventTabBar, {EventTab} from "../../components/common/event/EventTabBar";
import EventNftLine from "../../components/common/nft/EventNftLine";
import "../../styles.css"
import {EventResponse} from "../../solana/rpc/getEvent";
import "../../styles.css"
import NewSmallLoader from "../../components/common/loader/NewSmallLoader";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchOffers} from "../../store/offers/thunk";
import {useObserver} from "../../hooks/useObserver";
import {eventOffersSlice} from "../../store/offers/offers";
import {eventPreviewSlice} from "../../store/event/preview";
import {AccountContext} from "../../App";


interface EventScreenProps {
    event: EventResponse,
}

const EventPage: React.FC<EventScreenProps> = ({
    event,
}) => {

    const {offers, from, limit, fetching, hasMore} = useAppSelector(state => state.offers)
    const lastElement = useRef<any>()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOffers(event.authority, from, limit))
        return () => {
            dispatch(eventPreviewSlice.actions.reset())
            dispatch(eventOffersSlice.actions.reset())
        }
    }, [])

    useObserver(lastElement, hasMore, fetching, () => {
        dispatch(fetchOffers(event.authority, from, limit))
    })

    const [searchTokenId, setSearchTokenId] = useState('')
    const [activeTab, setActiveTab] = useState(EventTab.AllNfts)

    return (
        <AccountContext.Consumer>
            {({account}) =>
                (<div className="max-w-screen-2xl mx-auto">
                        <div className="flex flex-col pt-12 px-4 justify-center max-w-max mx-auto gap-8 md:gap-14">
                            <div>
                                <EventTitle title={event.title}/>
                                <div className="flex flex-col md:flex-row w-full mt-5 md:mt-10 gap-5">
                                    <InfoBlock discount={event.percent}
                                               vesting={event.vestingTime}
                                               collectedTokensAmount={event.collectedTokensAmount.toString()}
                                               fullTokensAmount={event.fullTokensAmount.toString()}
                                               totalNfts={event.totalNfts.toString()}
                                    />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="w-full flex justify-center mt-5">
                                <EventTabBar activeTab={activeTab} setActiveTab={setActiveTab}
                                             allTabs={[EventTab.AllNfts, EventTab.CollectedNfts, EventTab.NotCollectedNfts]}/>
                            </div>
                            <div className="space-y-2">
                                <div className="pl-2 text-white font-archivo font-bold">Filter</div>
                                <TokenSearchInput tokenId={searchTokenId} setTokenId={setSearchTokenId}/>
                            </div>
                            <div className="mb-7">
                                <div className="flex flex-col bg-gray-900 rounded-2xl
                                    px-3 md:px-6 overflow-hidden mb-10"
                                >
                                    {offers.map((offer, index) =>
                                        <>
                                            <EventNftLine key={offer.token.meta.pubkey.toString()}
                                                          currentUserId={account}
                                                          mintAddress={offer.token.meta.data.mint}
                                                          name={offer.token.meta.data.data.name}
                                                          defaultIsCollected={offer.offer.isCollected}
                                                          image={offer.token.image}
                                                          params={{
                                                              authorityAccount: event.authority,
                                                              offerAccount: offer.offer.offerAccount,
                                                              eventAccount: event.eventAddress,
                                                              tokenAddress: event.token,
                                                              nftMintAccount: offer.offer.kindOfTokenWantedInReturn,
                                                          }}
                                            />
                                            {index !== offers.length - 1 && <hr className="hr-color"/>}
                                        </>
                                    )}
                                </div>
                                {fetching
                                    ? <div className="pb-9">
                                        <NewSmallLoader/>
                                    </div>
                                    : <div ref={lastElement}/>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </AccountContext.Consumer>
    );
};

export default EventPage;