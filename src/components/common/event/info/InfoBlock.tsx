import React from 'react';
import EventInfoCell from "./EventInfoCell";

interface EventInfoBlockProps {
    discount: number,
    endTimestamp: number
}

const InfoBlock = React.memo<EventInfoBlockProps>(({
    discount,
    endTimestamp
}) => {
    return (
        <div className="rounded-2xl bg-event-info flex flex-col px-[16px] py-[24x] w-[350px]">
            <EventInfoCell name="Distributed tokens" description="Amount of tokens to distribute">
                100 SOL
            </EventInfoCell>
            <hr/>
            <EventInfoCell name="Discount" description="Value">
                {discount}%
            </EventInfoCell>
            <hr/>
            <EventInfoCell name="Vesting period" description="Duration after tokens will be unlocked">
                7 days
            </EventInfoCell>
            <hr/>
            <EventInfoCell name="Expiration time" description="Expires">
                {new Date(endTimestamp).toDateString()}
            </EventInfoCell>
        </div>
    );
});

export default InfoBlock;