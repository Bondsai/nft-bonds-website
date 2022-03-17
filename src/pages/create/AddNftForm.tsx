import React, {useEffect, useState} from 'react';
import {IconContext} from "react-icons";
import {MdOutlineAddCircleOutline} from "react-icons/md";
import EventTitle from "../../components/common/event/EventTitle";
import BaseButton from "../../components/common/buttons/BaseButton";
import {Row} from "./CreatePage";
import {useNavigate} from "react-router-dom";
import {findEventAddress} from "../../solana/find";
import {PublicKey} from "@solana/web3.js";
import {makeOffer} from "../../solana/rpc/makeOffer";
import {submitEvent} from "../../solana/rpc/submitEvent";
import './CreatePage.css'
import {getNFT} from "../../solana/requests";
import {Network} from "../../solana/core/program";
import ListItemLoader from "./ListItemLoader";

interface Props {
    setNftAddress: (s: string) => void
    addNewRow: (row: Row) => void
    nftAddress: string
    rows: Row[]
    tokenAddress: string
    account: string
}

const AddNftForm = React.memo<Props>(({
    tokenAddress,
    addNewRow,
    rows,
    account
}) => {
    const [eventAddress, setEventAddress] = useState<string | null>(null)
    const [nftAddress, setNftAddress] = useState('')
    const [index, setIndex] = useState(0)
    const [loaderVisibility, setLoaderVisibility] = useState(false)

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

            {/*Header and stuff*/}
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

            {/*Add nft, nft list, submit event button*/}
            <div className="flex flex-col mt-4 space-b">
                <div className="flex flex-row">
                    <div className="flex-grow">
                        <div className="relative rounded-3xl">
                            <input type="text" id="nft-address"
                                   value={nftAddress}
                                   onChange={(e) => setNftAddress(e.target.value)}
                                   className="rounded-r-none float-input pt-8
                                            text-white
                                            text-base
                                            bg-dark-gray font-archivo
                                            rounded-2xl
                                            focus:outline-none rounded-md focus:border-gray-500
                                            focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                                   placeholder="NFT address" autoComplete="off"/>
                            <label htmlFor={"nft-address"}
                                   className="float-label
                                            font-archivo
                                            text-gray-400
                                            opacity-75
                                            absolute top-0 left-0 px-3 py-5 h-full
                                            pointer-events-none">
                                NFT address
                            </label>
                        </div>
                    </div>

                    <BaseButton
                        onClick={async (e) => {
                            e.preventDefault()
                            if (eventAddress && nftAddress) {
                                setLoaderVisibility(true)
                                add(eventAddress, nftAddress, index)
                                    .then(() => {
                                        setIndex(index + 1)
                                        getNFT(nftAddress, Network.Devnet).then(res => {
                                            console.log(res)
                                            setLoaderVisibility(false)
                                            addNewRow({
                                                id: index,
                                                address: nftAddress,
                                                name: res.meta.data.data.name,
                                                image: res.image ? res.image : ""
                                            })
                                        })
                                    })
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

                <div className={"self-center mt-4 " + (!loaderVisibility && rows.length === 0 ? "hidden" : "")}>
                    <ul role="list" className="bg-gray-800 rounded-2xl p-4 space-y-4">
                        {rows.map(row => <li key={row.id}>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-20 h-20 rounded object-cover border border-gray-400"
                                         src={row.image}
                                         alt="NFT image"/>
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
                        <li className={"flex flex-row items-center justify-center " + (loaderVisibility ? "h-20" : "hidden")}>
                            <ListItemLoader/>
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
                    extraClasses={`font-archivo font-semibold h-16 px-4 py-2 text-white mt-4 mx-auto bg-gradient-to-br
                    from-sol-green text-sm to-blue-500 rounded-xl text-white ` + (rows.length > 0 ? "visible" : "invisible")}>
                    Submit event
                </BaseButton>
            </div>
        </div>
    );
});

export default AddNftForm;