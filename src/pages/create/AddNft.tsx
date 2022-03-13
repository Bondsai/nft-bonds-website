import React, {useEffect, useState} from 'react';
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import Modal from "./Modal";
import {Row} from "./CreatePage";
import {findEventAddress} from "../../solana/find";
import {PublicKey} from "@solana/web3.js";
import {makeOffer} from "../../solana/rpc/makeOffer";
import {submitEvent} from "../../solana/rpc/submitEvent";

interface Props {
    setNftAddress: (s: string) => void
    addNewRow: (e: React.MouseEvent<HTMLButtonElement>) => void
    nftAddress: string
    rows: Row[]
    removeRow: (n: number) => void
    tokenAddress: string
    account: string
}

const AddNft = React.memo<Props>(({
    tokenAddress,
    rows,
    removeRow,
    account
}) => {
    const [eventAddress, setEventAddress] = useState<string | null>(null)
    const [nftAddress, setNftAddress] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        findEventAddress(new PublicKey(account))
            .then(({programAddress}) => setEventAddress(programAddress.toString()))
    }, [])

    console.log(eventAddress, account, tokenAddress, nftAddress)

    const add = async (eventAddress: string, nftAddress: string, index: number) => {
        return await makeOffer({
            eventAddress: new PublicKey(eventAddress),
            offerMakerAddress: new PublicKey(account),
            tokenAddress: new PublicKey(tokenAddress),
            nftAddress: new PublicKey(nftAddress),
            index,
            price: 2 * 100000000
        })
    }

    return (
        <div className="flex flex-col mx-auto w-3/4">
            <AddForm setNftAddress={setNftAddress}
                     submitEvent={async () => {
                         if (eventAddress) {
                             await submitEvent(new PublicKey(eventAddress))
                         }
                     }}
                     submitNftAddress={async () => {
                         if (eventAddress && nftAddress) {
                             await add(eventAddress, nftAddress, index)
                             setIndex(index + 1)
                         }
                     }}
                     nftAddress={nftAddress}
            />
        </div>
    );
});

export default AddNft;