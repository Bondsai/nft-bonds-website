import React from 'react';

interface EventLogoProps {
    link: string
}

const EventLogo = React.memo<EventLogoProps>(({link}) => {
    return (
        <img src={link}
             className="w-[100px] object-contain"
        />
    );
});

export default EventLogo;