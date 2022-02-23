import {Popover} from '@headlessui/react';
import React from 'react';
import {BiWallet} from "react-icons/bi";

const WalletButton = () => {
    return (
        <Popover.Button>
            <BiWallet color="white" size={30}/>
        </Popover.Button>
    );
};

export default WalletButton;