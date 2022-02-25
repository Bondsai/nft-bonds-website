import React from "react";
import "./CreatePage.css"
import {Row} from "./CreatePage";
import {IconContext} from "react-icons";
import {ImCross} from "react-icons/im";

interface Props {
    rows: Row[]
    removeRow: (n: number) => void
}

// huge copy-pasta, the only difference between two list is number of columns

const NftListVerbose: React.FC<Props> = ({rows, removeRow}) => {
    return (
        <div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-10">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-dark-gray">
                            <tr>
                                <th scope="col"
                                    className="opacity-70 font-archivo font-semibold tracking-wider text-left uppercase text-white py-3 px-6">
                                    Name
                                </th>
                                <th scope="col"
                                    className="opacity-70 font-archivo font-semibold tracking-wider text-left uppercase text-white py-3 px-6">
                                    Color
                                </th>
                                <th scope="col"
                                    className="opacity-70 font-archivo font-semibold tracking-wider text-left uppercase text-white py-3 px-6">
                                    Category
                                </th>
                                <th scope="col"
                                    className="opacity-70 font-archivo font-semibold tracking-wider text-left uppercase text-white py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="relative py-3 px-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows.map((row =>
                                    <tr key={row.id}
                                        className="border-b last:border-b-0 last:border-0 bg-gray-800 border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium whitespace-nowrap text-white">
                                            {row.text}
                                        </td>
                                        <td className="py-4 px-6 text-sm whitespace-nowrap text-gray-400">
                                            Sliver
                                        </td>
                                        <td className="py-4 px-6 text-sm whitespace-nowrap text-gray-400">
                                            Laptop
                                        </td>
                                        <td className="py-4 px-6 text-sm whitespace-nowrap text-gray-400">
                                            $2999
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <IconContext.Provider
                                                value={{color: "white"}}>
                                                <ImCross
                                                    className="cross-icon mx-auto transition ease-in-out delay-50 hover:scale-125 duration-300"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        removeRow(row.id)
                                                    }}
                                                />
                                            </IconContext.Provider>
                                        </td>
                                    </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftListVerbose;