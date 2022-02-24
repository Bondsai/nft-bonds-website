import React from 'react';
import BaseButton from "../buttons/BaseButton";

interface FormProps {
    setNftAddress: (s: string) => void
    submitNftAddress: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AddForm = React.memo<FormProps>(({setNftAddress, submitNftAddress}) => {
    return (
        <div className="container flex gap-1 my-4">
            <form className="flex">
                <input
                    onChange={(e) => setNftAddress(e.target.value)}
                    className="rounded-l-xl p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder="NFT address"/>
                <BaseButton onClick={(e) => submitNftAddress(e)} extraClasses="bg-gradient-to-br from-sol-green text-sm to-blue-500 rounded-r-xl text-white">
                    Add
                </BaseButton>
            </form>

            <form className="flex ml-auto gap-2">
                <input type="number" placeholder="Westing time"
                       className="rounded-xl p-2 border ml-auto text-gray-800 border-gray-200 bg-white"/>

                <input type="number" placeholder="Duration"
                       className="rounded-xl p-2 border ml-auto text-gray-800 border-gray-200 bg-white"/>

                <BaseButton
                    data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable"
                    extraClasses="bg-gradient-to-br from-sol-green text-sm to-blue-500 rounded-xl text-white    ">
                    Submit
                </BaseButton>
            </form>
        </div>
    );
});

export default AddForm;