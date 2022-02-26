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
        <Link
            onClick={onClick}
            to={link}
            className={
                (isActive ? "text-sol-green" : "text-sol-white font-archivo hover:text-sol-sea") +
                " font-archivo font-semibold flex gap-2 items-center"}
            style={{
                letterSpacing: 1
            }}>
            {icon}
            {name}
        </Link>
    );
});

export default NavigationLink;