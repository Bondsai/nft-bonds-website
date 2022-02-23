import React from 'react';
import {Link} from "react-router-dom";
import GreenBluePinkBorder from "../borders/GreenBluePinkBorder";

export interface LinkProps {
    name: string,
    link: string,
    icon?: React.ReactNode
}

const NavigationLink = React.memo<LinkProps>(({
    name,
    link,
    icon
}) => {
    return (
        <Link to={link}
              className="text-sol-white font-archivo text-sm font-semibold hover:text-blue-400
                         inline-flex gap-2 items-center"
              style={{
                  letterSpacing: 1
              }}
        >
            {icon}
            {name}
        </Link>
    );
});

export default NavigationLink;