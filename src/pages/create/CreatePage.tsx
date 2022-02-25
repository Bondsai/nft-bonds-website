import React, {useState} from "react";
import Modal from "./Modal";
import CreateEvent from "./CreateEvent";
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";

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

    const [eventCreated, setEventCreated] = useState(false)

    const [nftAddress, setNftAddress] = useState('')
    const [rows, setRows] = useState<Row[]>([])

    const addNewRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows([...rows, {id: rows.length + 1, text: nftAddress}])
    }

    const removeRow = (id: number) => {
        const newRows = rows.filter((row) => row.id !== id)
        setRows(newRows)
    }

    return (
        <>
            {eventCreated ?
                <div className="flex flex-col mx-auto w-3/4">
                    <AddForm setNftAddress={setNftAddress} submitNftAddress={addNewRow} nftAddress={nftAddress}/>
                    <NftListVerbose rows={rows} removeRow={removeRow}/>
                    <Modal rows={rows}/>
                </div> :
                <CreateEvent setEventName={setEventName}
                             setVestingPeriod={setVestingPeriod}
                             setEventDuration={setEventDuration}
                             setEventCreated={setEventCreated}/>
            }
        </>
    );
};

export default CreatePage;