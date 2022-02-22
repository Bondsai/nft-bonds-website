import React from 'react';

interface EventDescriptionProps {
    title?: string
    description?: string
}

const EventDescription = React.memo<EventDescriptionProps>(({
    title,
    description
}) => {
    return (
        <div>
            <div className="text-sol-white font-archivo text-3xl font-bold">
                {title}
            </div>
            <div className="text-gray-500 font-archivo text-md">
                {description}
            </div>
        </div>
    );
});

export default EventDescription;