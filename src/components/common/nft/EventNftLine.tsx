import React from 'react';

interface EventNftLineProps {
    image?: string,
    name: string,
    isCollected: boolean
}

const EventNftLine =React.memo<EventNftLineProps>(({
    image,
    name,
    isCollected
}) => {
    return (
        <div>
            <img src={image}/>
        </div>
    );
});

export default EventNftLine;