import React from 'react';
import LogoLink from "./LogoLink";
import ConnectWalletButton from "../auth/ConnectWalletButton";
import NavigationLink, {LinkProps} from "./NavigationLink";

import {CgNotes} from 'react-icons/cg'
import {BsFileEarmarkPlus} from 'react-icons/bs'
import {AccountContext} from "../../../App";
import {BiWallet} from "react-icons/bi";


const Navbar = () => {

    const links: LinkProps[] = [
        {name: "Explore", link: "/explore", icon: <CgNotes/>},
        {name: "Create", link: "/create", icon: <BsFileEarmarkPlus/>},
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
                    {links.map(link =>
                        <NavigationLink name={link.name}
                                        link={link.link}
                                        icon={link.icon}
                        />
                    )}
                </div>
                <AccountContext.Consumer>
                    {({account, changeAccount}) =>
                        (account
                                ? <BiWallet color="white" size={30}/>
                                : <ConnectWalletButton setAccount={changeAccount}/>
                        )
                    }
                </AccountContext.Consumer>
            </div>
        </div>
    );
};

export default Navbar;