import React from 'react';
import './CreatePage.css'
import BaseButton from "../../components/common/buttons/BaseButton";

interface FormProps {
    setNftAddress: (s: string) => void,
    submitEvent: () => Promise<any>
    submitNftAddress: (e: React.MouseEvent<HTMLButtonElement>) => void
    nftAddress: string
}

const AddForm = React.memo<FormProps>(({
    nftAddress,
    setNftAddress,
    submitEvent,
    submitNftAddress
}) => {

    return (
        <div className="container flex gap-1 my-4">
            <form className="nft-address-form flex">
                <input
                    value={nftAddress}
                    onChange={(e) => setNftAddress(e.target.value)}
                    className="nft-address-input
                        rounded-l-xl px-3 py-3
                        outline-none
                        focus:ring-1
                        focus:ring-gray-400
                        placeholder-gray-400
                        text-white
                        text-base
                        bg-dark-gray font-archivo"
                    placeholder="NFT address"/>
                <BaseButton onClick={async (e) => {
                    e.preventDefault()
                    await submitNftAddress(e)
                    setNftAddress("")
                }} extraClasses={"nft-address-submit " +
                    "bg-gradient-to-br from-sol-green text-sm to-blue-500 rounded-r-xl text-white"}>
                    Add
                </BaseButton>
            </form>

            <BaseButton
                onClick={async (e) => {
                    e.preventDefault()
                    await submitEvent()
                }}
                data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable"
                extraClasses="ml-auto bg-gradient-to-br from-sol-green text-sm to-blue-500 rounded-xl text-white">
                Submit
            </BaseButton>
        </div>
    );
});

export default AddForm;