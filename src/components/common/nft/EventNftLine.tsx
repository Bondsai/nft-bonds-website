import React from 'react';
import TokenPriceBlock from "../coin/TokenPriceBlock";
import {SiEthereum} from 'react-icons/si'

interface EventNftLineProps {
    image?: string,
    name: string,
    isCollected: boolean
}

const EventNftLine = React.memo<EventNftLineProps>(({
    image,
    name,
    isCollected
}) => {
    return (
        <div className="overflow-hidden font-archivo
                        inline-flex max-h-[100px] items-center justify-between py-[16px]">
            <div className="inline-flex gap-3 items-center">
                <img src={image} className="object-contain max-w-[65px] rounded-md"/>
                <div className="flex flex-col text-white">
                    {name}
                    <TokenPriceBlock amount={"100"} icon={<SiEthereum/>}/>
                </div>
            </div>
            <div className="mr-2 text-white">{
                isCollected
                    ? "Deposited"
                    : "Sell"
            }</div>
        </div>
    );
});

export default EventNftLine;