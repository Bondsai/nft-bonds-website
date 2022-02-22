import React from 'react';


interface EventTitleProps {
    title: string
}

const EventTitle = React.memo<EventTitleProps>(({
    title
}) => {
    return (
        <div className="text-sol-white text-xl font-archivo">
            {title}
        </div>
    );
});

export default EventTitle;