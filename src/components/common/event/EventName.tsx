import React from 'react';

interface EventNameProps {
    name: string
}

const EventName = React.memo<EventNameProps>(({name}) => {
    return (
        <div>
            {name}
        </div>
    );
});

export default EventName;