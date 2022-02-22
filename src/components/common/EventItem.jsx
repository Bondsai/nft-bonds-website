import React from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";

const EventItem = () => {

    const time = "5 days"
    const price = "10 backs"
    const all = 10
    const collected = 5
    const isFinished = true

    return (
        <div className="border-solid border-2 border-sol-white rounded-lg w-60 h-80 m-5">
            <div className="border-solid border-2 border-sol-white rounded-lg h-40 m-5">
                Here your pictures
            </div>
            <div className="text-sol-white justify-center flex text-2xl font-bold overflow-x-scroll max-w-60 max-h-10">
                Our Company
            </div>
            <div className="text-sol-white justify-center flex">
                <IoMdPricetags className="mt-1 mr-1"/>
                <div>
                    price: {price}
                </div>
            </div>
            <div className="text-sol-white justify-center flex">
                <BiTimeFive className="mt-1 mr-1"/>
                <div>
                    time to unlock: {time}
                </div>
            </div>
            <div className="text-sol-white justify-center flex">
                <ImCheckmark className="mt-1 mr-1"/>
                <div>
                    Collected: {collected}/{all}
                </div>
            </div>
        </div>
    );
};

export default EventItem;