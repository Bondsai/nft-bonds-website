import React from 'react';
import TokenPriceBlock from "../coin/TokenPriceBlock";
import {SiEthereum} from 'react-icons/si'
import {HiOutlineCheckCircle} from "react-icons/hi";

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
                <div className="flex flex-col text-white max-md:text-[12px] font-archivo">
                    {name}
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
                    : "Sell"
            }</div>
        </div>
    );
});

export default EventNftLine;