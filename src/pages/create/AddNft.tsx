import React, {useEffect, useState} from 'react';
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import Modal from "./Modal";
import {Row} from "./CreatePage";
import {findEventAddress} from "../../solana/find";
import {PublicKey} from "@solana/web3.js";
import {makeOffer} from "../../solana/rpc/makeOffer";
import {submitEvent} from "../../solana/rpc/submitEvent";
import {useNavigate} from "react-router-dom";

interface Props {
    setNftAddress: (s: string) => void
    addNewRow: (e: React.MouseEvent<HTMLButtonElement>) => void
    nftAddress: string
    rows: Row[]
    tokenAddress: string
    account: string
}

const AddNft = React.memo<Props>(({
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
        <div className="flex flex-col mx-auto w-3/4">
            <AddForm setNftAddress={setNftAddress}
                     submitEvent={() => {
                         if (eventAddress) {
                             submitEvent(new PublicKey(eventAddress))
                                 .then(() => navigate(`/event/${account}`))
                                 .catch(e => alert("Submission FAILED: " + e?.message?.toString()))
                         }
                     }}
                     submitNftAddress={() => {
                         if (eventAddress && nftAddress) {
                             add(eventAddress, nftAddress, index)
                                 .then(() =>
                                     setIndex(index + 1)
                                 )
                                 .catch(() => console.log('w'))
                         }
                     }}
                     nftAddress={nftAddress}
            />
        </div>
    );
});

export default AddNft;