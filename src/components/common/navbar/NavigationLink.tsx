import React from 'react';
import {Link} from "react-router-dom";

export interface LinkProps {
    name: string,
    link: string
}

const NavigationLink = React.memo<LinkProps>(({
    name,
    link
}) => {
    return (
        <Link to={link}
              className="text-sol-white font-archivo text-sm font-semibold hover:text-blue-400"
              style={{
                  letterSpacing: 1
              }}
        >
            {name}
        </Link>
    );
});

export default NavigationLink;