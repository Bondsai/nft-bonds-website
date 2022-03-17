import React, {useEffect, useState} from 'react';
import {IconContext} from "react-icons";
import {MdOutlineAddCircleOutline} from "react-icons/md";
import EventTitle from "../../components/common/event/EventTitle";
import FloatingLabelInput from "./FloatingLabelInput";
import BaseButton from "../../components/common/buttons/BaseButton";
import {Row} from "./CreatePage";
import {useNavigate} from "react-router-dom";
import {findEventAddress} from "../../solana/find";
import {PublicKey} from "@solana/web3.js";
import {makeOffer} from "../../solana/rpc/makeOffer";
import {submitEvent} from "../../solana/rpc/submitEvent";
import './CreatePage.css'

interface Props {
    setNftAddress: (s: string) => void
    addNewRow: (e: React.MouseEvent<HTMLButtonElement>) => void
    nftAddress: string
    rows: Row[]
    tokenAddress: string
    account: string
}

const NftTestList = React.memo<Props>(({
    tokenAddress,
    rows,
    account
}) => {
    const [eventAddress, setEventAddress] = useState<string | null>(null)
    const [nftAddress, setNftAddress] = useState('')
    const [index, setIndex] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        findEventAddress(new PublicKey(account))
            .then(({programAddress}) => setEventAddress(programAddress.toString()))
    }, [])

    const add = (eventAddress: string, nftAddress: string, index: number) => {
        return makeOffer({
            eventAddress: new PublicKey(eventAddress),
            offerMakerAddress: new PublicKey(account),
            tokenAddress: new PublicKey(tokenAddress),
            nftAddress: new PublicKey(nftAddress),
            index,
            price: 2 * 100000000
        })
    }

    return (
        <div className="w-1/2 mx-auto pt-12 pb-12">
            <div className="flex items-center justify-center gap-2">
                <IconContext.Provider
                    value={{color: "white", size: "2em"}}>
                    <MdOutlineAddCircleOutline/>
                </IconContext.Provider>
                <EventTitle title={"Add NFTs"}/>
                <IconContext.Provider
                    value={{color: "white", size: "2em"}}>
                    <MdOutlineAddCircleOutline className=""/>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col mt-4 space-b">
                <div className="flex flex-row">
                    <div className="flex-grow">
                        <FloatingLabelInput inputType={"text"} id={"nft-address"}
                                            placeholder={"NFT address"} func={e => ({})}
                                            extraClasses={"rounded-r-none"}
                        />
                    </div>
                    <BaseButton
                        onClick={async (e) => {
                            e.preventDefault()
                            if (eventAddress && nftAddress) {
                                add(eventAddress, nftAddress, index)
                                    .then(() => setIndex(index + 1))
                                    .catch(() => console.log('w'))
                            }
                            setNftAddress("")
                        }}
                        extraClasses={
                            "nft-address-submit " +
                            "bg-gradient-to-br from-sol-green text-sm to-blue-500 " +
                            "rounded-r-2xl font-archivo font-semibold text-white"
                        }>
                        Add
                    </BaseButton>
                </div>

                <div className="self-center	mt-4">
                    <ul role="list" className="bg-gray-800 rounded-2xl p-4 space-y-4">
                        {rows.map(row => <li key={row.id}>
                            <div className="flex justify-center items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-20 h-20 rounded"
                                         src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                         alt="Neil image"/>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium text-white font-archivo truncate">
                                        {row.name}
                                    </p>
                                    <p className="text-xl font-archivo text-gray-400 truncate">
                                        {row.address}
                                    </p>
                                </div>
                            </div>
                        </li>)}
                        <li className="">
                            <div className="flex justify-center items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-20 h-20 rounded"
                                         src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                         alt="Neil image"/>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium text-white font-archivo truncate">
                                        Flower #26
                                    </p>
                                    <p className="text-xl font-archivo text-gray-400 truncate">
                                        DbQSJfYz3Uvp7ywgDqVXVsrDDv5VSnByVe6b2sdHNcxq
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <BaseButton
                    onClick={async (e) => {
                        e.preventDefault()
                        if (eventAddress) {
                            submitEvent(new PublicKey(eventAddress))
                                .then(() => navigate(`/event/${account}`))
                                .catch(e => alert("Submission FAILED: " + e?.message?.toString()))
                        }
                    }}
                    extraClasses="font-archivo font-semibold h-16 px-4 py-2 text-white mt-4mx-auto bg-gradient-to-br
                        from-sol-green text-sm to-blue-500 rounded-xl text-white">
                    Submit event
                </BaseButton>
            </div>
        </div>
    );
});

export default NftTestList;