import React, {useState} from "react";
import AddForm from "./AddForm";
import NftListVerbose from "./NftListVerbose";
import Modal from "./Modal";

// import NftModal from "./NftModal";

export interface Row {
    id: number,
    text: string
}

export interface Rows {
    rows: Row[]
}

const NftTable = () => {
    const [nftAddress, setNftAddress] = useState('')
    const [rows, setRows] = useState<Row[]>([])

    const addNewRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // change id to something usable, like (?) nft hash
        setRows([...rows, {id: rows.length + 1, text: nftAddress}])
    }

    const removeRow = (id: number) => {
        const newRows = rows.filter((row) => row.id !== id)
        setRows(newRows)
    }

    return (
        <div className="flex flex-col mx-auto w-3/4">
            <AddForm setNftAddress={setNftAddress} submitNftAddress={addNewRow}/>
            <NftListVerbose rows={rows} removeRow={removeRow}/>

            {/*hidden, shown on button click using DOM, probably need to change to match react guidelines?*/}
            <Modal rows={rows}/>

                {/*// <div*/}
                {/*//     style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}*/}
                {/*//     className='fixed inset-0 z-50 flex items-center p-4 '>*/}
                {/*//     <div className="flex mx-auto justify-center bg-blue-50">*/}
                {/*//         <BlueGreenButton title={'asd'}>*/}
                {/*//             Hahaha*/}
                {/*//         </BlueGreenButton>*/}
                {/*//     </div>*/}
                {/*// </div>*/}
        </div>
    );
};

export default NftTable;