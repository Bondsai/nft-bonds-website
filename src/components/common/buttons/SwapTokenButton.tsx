import React from 'react';
import BaseButton from "./BaseButton";
import {RiSwapLine} from "react-icons/ri";

const SwapTokenButton = () => {
    return (
        <BaseButton extraClasses="rounded-xl bg-gray-900 text-sol-white font-archivo
                                  font-bold text-sm inline-flex w-[180px] gap-2 items-center justify-center">
            Swap NFT
            <RiSwapLine size={17}/>
        </BaseButton>
    );
};

export default SwapTokenButton;