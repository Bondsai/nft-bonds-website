import React, {useState} from 'react';
import TokenPriceBlock from "../coin/TokenPriceBlock";
import {SiEthereum} from 'react-icons/si'
import {HiOutlineCheckCircle} from "react-icons/hi";
import {acceptOffer, AcceptOfferParams} from "../../../solana/rpc/acceptOffer";
import {PublicKey} from "@solana/web3.js";

interface EventNftLineProps {
    mintAddress: string,
    currentUserId: string
    image?: string,
    name: string,
    defaultIsCollected: boolean,
    params: Omit<AcceptOfferParams, 'offerTaker'>
}

const EventNftLine = React.memo<EventNftLineProps>(({
    mintAddress,
    currentUserId,
    image,
    name,
    defaultIsCollected,
    params,
}) => {
    const [isCollected, setIsCollected] = useState(defaultIsCollected)
    const [clicked, setClicked] = useState(false)
    return (
        <div className="overflow-hidden font-archivo
                        inline-flex max-h-24 items-center justify-between py-4">
            <div className="inline-flex gap-3 items-center">
                <a href={`https://solscan.io/token/${mintAddress}`}
                   target="_blank"
                >
                    <img src={image} className="object-contain w-12 rounded-md"/>
                </a>
                <div className="flex flex-col text-white opacity-85 max-md:text-sm font-archivo">
                    <a href={`https://solscan.io/token/${mintAddress}`}
                       target="_blank">{name}
                    </a>
                    <TokenPriceBlock amount={"100"} icon={<SiEthereum/>}/>
                </div>
            </div>
            <div className="mr-2 text-sol-white text-sm font-archivo">{
                isCollected
                    ?
                    <div className="inline-flex items-center gap-1">
                        Collected
                        <HiOutlineCheckCircle/>
                    </div>
                    :
                    currentUserId ?
                        <button
                            className="rounded-xl bg-white px-7 py-2 font-archivo font-bold text-black hover:bg-gray-200
                                       disabled:bg-gray-600"
                            onClick={() => {
                                setClicked(true)
                                acceptOffer({
                                        ...params,
                                        offerTaker: new PublicKey(currentUserId)
                                    }
                                ).then(() => setIsCollected(true)
                                ).catch(e => alert(e?.message?.toString())
                                ).finally(() => setClicked(false))
                            }}
                            disabled={clicked}
                        >
                            Sell
                        </button>
                        : null
            }</div>
        </div>
    );
});

export default EventNftLine;