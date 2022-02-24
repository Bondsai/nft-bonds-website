import NftListSimple from "./NftListSimple";
import React from "react";
import {Rows} from "./CreatePage";

// created using tailwind-elements ("tw-elements": "^1.0.0-alpha11", in package.json)
// buttons should be taken out in order to be re-used as components?
// to be honest too much stuff happening in here, no idea how tw-elements library works
// but at least its working!

const Modal: React.FC<Rows> = ({rows}) => {
    return (
        <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalCenteredScrollable" tabIndex={-1} aria-labelledby="exampleModalCenteredScrollable"
            aria-modal="true" role="dialog">
            <div
                className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalCenteredScrollableLabel">
                            Confirmation
                        </h5>
                        <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body relative p-4">
                        <NftListSimple rows={rows}/>
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button"
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;