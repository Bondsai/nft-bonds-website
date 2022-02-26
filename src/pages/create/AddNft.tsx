import React, {useEffect, useState} from 'react';
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import Modal from "./Modal";
import {Row} from "./CreatePage";
import {findEventAddress} from "../../solana/find";
import {PublicKey} from "@solana/web3.js";

interface Props {
    setNftAddress: (s: string) => void
    addNewRow: (e: React.MouseEvent<HTMLButtonElement>) => void
    nftAddress: string
    rows: Row[]
    removeRow: (n: number) => void

    account: string
}

const AddNft = React.memo<Props> (({
    setNftAddress,
    addNewRow,
    nftAddress,
    rows,
    removeRow,
    account
}) => {
    const [response, setResponse] = useState({})

    useEffect(() => {
        findEventAddress(new PublicKey(account)).then(r => (setResponse(r)))
    }, [])

    return (
        <div className="flex flex-col mx-auto w-3/4">
            <AddForm setNftAddress={setNftAddress} submitNftAddress={addNewRow}
                     nftAddress={nftAddress}/>
            <NftListVerbose rows={rows} removeRow={removeRow}/>
            <Modal rows={rows}/>
        </div>
    );
});

export default AddNft;