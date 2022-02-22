import React from 'react';
import {getRelativeTimestamp} from "../../../utils/time";


interface EventTimeProps {
    timestamp: number
}

const EventTime = React.memo<EventTimeProps>(({
    timestamp
}) => {
    const now = Date.now()
    const finished = now < timestamp
    return (
        <div className="font-archivo font-semibold text-white">
            {finished
                ? "Expired at: "
                : "Expires at: "
            }
            {getRelativeTimestamp(timestamp)}
        </div>
    );
});

export default EventTime;