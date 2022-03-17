import React from "react";
import {Rows} from "./CreatePage";

// huge copy-pasta, the only difference between two list is number of columns

const NftListSimple: React.FC<Rows> = ({rows}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <div className="inline-block py-2 min-w-full">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-dark-gray">
                            <tr>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-gray-400">
                                    Name
                                </th>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-gray-400">
                                    Category
                                </th>
                                <th scope="col"
                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase text-gray-400">
                                    Price
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                            {rows.map((row =>
                                    <tr key={row.id} className="border-b last:border-b-0 last:border-0 bg-gray-800 border-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium whitespace-nowrap text-white">
                                            {row.address}
                                        </td>
                                        <td className="py-4 px-6 text-sm whitespace-nowrap text-gray-400">
                                            Laptop
                                        </td>
                                        <td className="py-4 px-6 text-sm whitespace-nowrap text-gray-400">
                                            $2999
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

export default NftListSimple;