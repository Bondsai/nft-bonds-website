import React, {useState} from "react";
import CreateEvent from "./CreateEvent";
import {AccountContext} from "../../App";
import {createEvent} from "../../solana/rpc/createEvent";
import {PublicKey} from "@solana/web3.js";
import AddNft from "./AddNft";
import NftTestList from "./NftTestList";

export interface Row {
    id: number,
    address: string
    name: string
}

export interface Rows {
    rows: Row[]
}

const CreatePage = () => {
    const [eventName, setEventName] = useState('')
    const [eventDuration, setEventDuration] = useState(0)
    const [vestingPeriod, setVestingPeriod] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [tokenAddress, setTokenAddress] = useState('')

    const [eventCreated, setEventCreated] = useState(false)

    const [nftAddress, setNftAddress] = useState('')
    const [rows, setRows] = useState<Row[]>([])

    const addNewRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows([...rows, {id: rows.length + 1, address: nftAddress, name: "Flower #26"}])
    }

    return (
        <AccountContext.Consumer>
            {({account, changeAccount}) =>
                (eventCreated && account.length !== 0 ?
                        <NftTestList setNftAddress={setNftAddress}
                                tokenAddress={tokenAddress}
                                addNewRow={addNewRow}
                                nftAddress={nftAddress}
                                rows={rows}
                                account={account}/> :
                        <CreateEvent setEventName={setEventName}
                                     setVestingPeriod={setVestingPeriod}
                                     setEventDuration={setEventDuration}
                                     setEventCreated={setEventCreated}
                                     setDiscount={setDiscount}
                                     setTokenAddress={setTokenAddress}
                                     callCreateEvent={async () => {
                                         const fields = {
                                             offerMaker: new PublicKey(account),
                                             name: eventName,
                                             duration: eventDuration,
                                             discount: discount,
                                             vesting: vestingPeriod,
                                             tokenAddress: tokenAddress
                                         }
                                         console.log(fields)
                                         return await createEvent(fields)
                                     }}
                                     account={account}/>
                )
            }
        </AccountContext.Consumer>
    );
};

export default CreatePage;