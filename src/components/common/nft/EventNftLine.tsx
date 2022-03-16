import React from 'react';
import TokenPriceBlock from "../coin/TokenPriceBlock";
import {SiEthereum} from 'react-icons/si'
import {HiOutlineCheckCircle} from "react-icons/hi";
import {acceptOffer, AcceptOfferParams} from "../../../solana/rpc/acceptOffer";

interface EventNftLineProps {
    mintAddress: string,
    image?: string,
    name: string,
    isCollected: boolean,
    params: AcceptOfferParams
}

const EventNftLine = React.memo<EventNftLineProps>(({
    mintAddress,
    image,
    name,
    isCollected,
    params,
}) => {
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
                    <button onClick={() => acceptOffer(params)
                        .then(response => console.log(response))
                        .catch(e => console.log(e.toString()))
                    }>
                        Sell
                    </button>
            }</div>
        </div>
    );
});

export default EventNftLine;