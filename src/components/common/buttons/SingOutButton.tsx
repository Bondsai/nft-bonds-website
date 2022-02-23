import React from 'react';
import BaseButton from "./BaseButton";
import {disconnect} from "../../../solana/auth";

const SingOutButton = () => {
    return (
        <BaseButton extraClasses="rounded-xl bg-white bg-opacity-90 hover:bg-opacity-100 font-bold text-dark-gray w-full py-2"
                    onClick={disconnect}
        >
            Sign out
        </BaseButton>
    );
};

export default SingOutButton;