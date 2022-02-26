import React, {useState} from "react";
import Modal from "./Modal";
import CreateEvent from "./CreateEvent";
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import {AccountContext} from "../../App";
import {Popover} from "@headlessui/react";
import WalletButton from "../profile/WalletButton";
import SignedInProfilePage from "../profile/SignedInProfilePage";
import ConnectWalletButton from "../../components/common/auth/ConnectWalletButton";
import {createEvent} from "../../solana/rpc/createEvent";
import {PublicKey} from "@solana/web3.js";
import AddNft from "./AddNft";

export interface Row {
    id: number,
    text: string
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

    const callCreateEvent = async (account: string) => {
        console.log(account)

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
    }

    const addNewRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows([...rows, {id: rows.length + 1, text: nftAddress}])
    }

    const removeRow = (id: number) => {
        const newRows = rows.filter((row) => row.id !== id)
        setRows(newRows)
    }

    return (
        <AccountContext.Consumer>
            {({account, changeAccount}) =>
                (eventCreated && account.length !== 0 ?
                        <AddNft setNftAddress={setNftAddress}
                                addNewRow={addNewRow}
                                nftAddress={nftAddress}
                                rows={rows}
                                removeRow={removeRow}
                                account={account}/>:
                        <CreateEvent setEventName={setEventName}
                                     setVestingPeriod={setVestingPeriod}
                                     setEventDuration={setEventDuration}
                                     setEventCreated={setEventCreated}
                                     setDiscount={setDiscount}
                                     setTokenAddress={setTokenAddress}
                                     callCreateEvent={callCreateEvent}
                                     account={account}/>
                )
            }
        </AccountContext.Consumer>
    );
};

export default CreatePage;