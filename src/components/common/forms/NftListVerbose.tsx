import React from "react";
import {Row} from "./NftTable";

interface Props {
    rows: Row[]
    removeRow: (n: number) => void
}

const NftListVerbose: React.FC<Props> = ({rows, removeRow}) => {
    return (
        <div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Name
                                </th>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Color
                                </th>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Category
                                </th>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
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
                                        className="bg-white border-b last:border-b-0 last:border-0 dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {row.text}
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Sliver
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Laptop
                                        </td>
                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            $2999
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    removeRow(row.id)
                                                }}
                                                className="text-red-600 dark:text-red-500 hover:underline">delete</a>
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