import React from 'react';
import {Link} from "react-router-dom";

export interface LinkProps {
    name: string,
    link: string,
    isActive?: boolean,
    icon?: React.ReactNode,
    onClick?: (r: any) => any
}

const NavigationLink = React.memo<LinkProps>(({
    name,
    link,
    isActive,
    icon,
    onClick
}) => {
    return (
        <div>
            {isActive ?
                <Link
                    onClick={onClick}
                    to={link}
                    className="text-sol-green font-archivo text-sm font-semibold inline-flex gap-2 items-center"
                    style={{
                        letterSpacing: 1
                    }}
                >
                    {icon}
                    {name}
                </Link>
                :
                <Link
                    onClick={onClick}
                    to={link}
                    className="text-sol-white font-archivo text-sm font-semibold hover:text-sol-sea
                         inline-flex gap-2 items-center"
                    style={{
                        letterSpacing: 1
                    }}
                >
                    {icon}
                    {name}
                </Link>
        }
        </div>
    );
});

export default NavigationLink;