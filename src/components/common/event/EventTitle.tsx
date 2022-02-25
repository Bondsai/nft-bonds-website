import React from 'react';


interface EventTitleProps {
    extra?: string
    title: string
}

const EventTitle = React.memo<EventTitleProps>(({
    extra="",
    title
}) => {
    return (
        <div className={extra + " text-white text-2xl lg:text-4xl font-archivo font-bold"}>
            {title}
        </div>
    );
});

export default EventTitle;