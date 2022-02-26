import React, {useState} from 'react';
import LogoLink from "./LogoLink";
import ConnectWalletButton from "../auth/ConnectWalletButton";
import NavigationLink, {LinkProps} from "./NavigationLink";

import {CgNotes} from 'react-icons/cg'
import {BsCalendarEvent, BsFileEarmarkPlus} from 'react-icons/bs'
import {AccountContext} from "../../../App";
import {Popover} from "@headlessui/react";
import WalletButton from "../../../pages/profile/WalletButton";
import SignedInProfilePage from "../../../pages/profile/SignedInProfilePage";


const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname === '/' ? "/explore" : window.location.pathname)

    const links: LinkProps[] = [
        {name: "Explore", link: "/explore", icon: <CgNotes/>},
        {name: "Create", link: "/create", icon: <BsFileEarmarkPlus/>},
        {name: "Event", link: "/event", icon: <BsCalendarEvent/>}
    ]

    return (
        <div className="z-50 fixed h-16 top-0 mx-auto w-full flex bg-black backdrop-blur-3xl bg-opacity-80">
            <div className="max-w-screen-2xl grow flex gap-10 w-full items-center
                            my-4
                            px-2
                            xs:px-5
                            md:px-10
                            2xl:px-10"
            >
                <div className="flex-1">
                    <LogoLink/>
                </div>
                <div className="inline-flex gap-10">
                    {links.map(link =>
                        <NavigationLink key={link.name}
                                        name={link.name}
                                        link={link.link}
                                        icon={link.icon}
                                        isActive={link.link === activeLink}
                                        onClick={_ => setActiveLink(link.link)}
                        />
                    )}
                </div>
                <div className="flex-1 flex justify-end">
                    <AccountContext.Consumer>
                        {({account, changeAccount}) =>
                            (account
                                    ?
                                    <Popover>
                                        <WalletButton/>
                                        <SignedInProfilePage account={account}/>
                                    </Popover>
                                    :
                                    <ConnectWalletButton setAccount={changeAccount}/>
                            )
                        }
                    </AccountContext.Consumer>
                </div>
            </div>
        </div>
    );
};

export default Navbar;