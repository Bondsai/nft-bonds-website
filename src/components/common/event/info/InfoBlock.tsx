import React from 'react';
import EventInfoCell from "./EventInfoCell";
import EventInfoSeparator from "./EventInfoSeparator";
import "../../../../styles.css"
import {PublicKey} from "@solana/web3.js";
import {BN} from "@project-serum/anchor";


// authority: PublicKey,
//     bump: number
// collectedTokensAmount: BN
// duration: number
// fullTokensAmount: BN
// isOpened: boolean
// percent: number
// startTime: BN
// title: string
// totalNfts: number
// vestingTime: number

interface EventInfoBlockProps {
    discount: number,
    vesting: number,
    collectedTokensAmount: string,
    fullTokensAmount: string,
    totalNfts: string
}

const InfoBlock = React.memo<EventInfoBlockProps>(({
    discount,
    vesting,
    collectedTokensAmount,
    fullTokensAmount,
    totalNfts
}) => {

    return (
        <div className="rounded-2xl bg-gray-900
                        flex flex-col px-4 py-4 w-350px
                        md:flex-row md:px-6 md:py-4 md:w-full"
        >
            <EventInfoCell name="Distributed tokens" description="Amount of tokens to distribute">
                {collectedTokensAmount} / {fullTokensAmount} DAO TOKEN
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Discount" description="Value">
                {discount}%
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Westing period" description="Duration after tokens will be unlocked">
                {vesting} day(s)
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Total NFTs" description="Collected NFTs amount">
                {totalNfts}
            </EventInfoCell>
        </div>
    );
});

export default InfoBlock;