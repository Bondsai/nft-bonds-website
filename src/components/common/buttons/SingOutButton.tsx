import React from 'react';
import BaseButton from "./BaseButton";
import {disconnect} from "../../../solana/auth";

const SingOutButton = () => {
    return (
        <BaseButton extraClasses="rounded-xl bg-[#00585f] hover:bg-[#074755] font-bold text-white w-full py-2"
                    onClick={disconnect}
        >
            Sign out
        </BaseButton>
    );
};

export default SingOutButton;