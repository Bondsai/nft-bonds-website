import React from 'react';


interface EventTitleProps {
    title: string
}

const EventTitle = React.memo<EventTitleProps>(({
    title
}) => {
    return (
        <div className="text-white text-2xl font-archivo font-bold">
            {title}
        </div>
    );
});

export default EventTitle;