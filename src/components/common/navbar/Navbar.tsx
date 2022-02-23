import React from 'react';
import {Link} from "react-router-dom";
import LogoLink from "./LogoLink";
import ConnectWalletButton from "../auth/ConnectWalletButton";
import NavigationLink, {LinkProps} from "./NavigationLink";


const Navbar = () => {

    const links: LinkProps[] = [
        {name: "Explore", link: "/explore"},
        {name: "Create", link: "/create"},
        {name: "Event", link: "/event"}
    ]

    return (
        <div className="z-[100] fixed top-0 mx-auto w-full flex bg-black backdrop-blur-3xl bg-opacity-10">
            <div className="max-w-screen-2xl mx-auto inline-flex gap-10 w-full justify-between items-center
                            my-4
                            px-2
                            xs:px-5
                            md:px-10
                            2xl:px-0"
            >
                <LogoLink/>
                <div className="inline-flex gap-10">
                    {links.map(link => <NavigationLink name={link.name} link={link.link}/>)}
                </div>
                <ConnectWalletButton/>
            </div>
        </div>
    );
};

export default Navbar;