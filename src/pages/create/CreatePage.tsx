import React, {useState} from "react";
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import Modal from "./Modal";
import FloatingLabelInput from "./FloatingLabelInput";

export interface Row {
    id: number,
    text: string
}

export interface Rows {
    rows: Row[]
}

const CreatePage = () => {
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
        <div className="flex flex-col mx-auto w-3/4">
            <AddForm setNftAddress={setNftAddress} submitNftAddress={addNewRow} nftAddress={nftAddress}/>
            <NftListVerbose rows={rows} removeRow={removeRow}/>

            {/*hidden, shown on button click using DOM, probably need to change to match React guidelines?*/}
            <Modal rows={rows}/>

            {/*<FloatingLabelInput inputType={"number"} placeholder={"Vesting period"}/>*/}

            {/*// <div*/}
            {/*//     style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}*/}
            {/*//     className='fixed inset-0 z-50 flex items-center p-4 '>*/}
            {/*//     <div className="flex mx-auto justify-center bg-blue-50">*/}
            {/*//         <BlueGreenButton title={'asd'}>*/}
            {/*//             Hello world*/}
            {/*//         </BlueGreenButton>*/}
            {/*//     </div>*/}
            {/*// </div>*/}
        </div>
);
};

export default CreatePage;