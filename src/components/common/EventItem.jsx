import React, {useState} from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";
import ItemImage from "./image/ItemImage";
import BlueGreenButton from "./buttons/BlueGreenButton";

const EventItem = ({item}) => {
    const [isFinished] = useState(item.isFinished)

    const time = "5 days"
    const price = "10 backs"
    const all = 10
    const collected = 5

    return (
        <div className="border-solid border-2 border-sol-white rounded-lg w-60 h-100 m-5 transition-shadow">
            <div className="border-solid border-2 border-sol-white rounded-lg h-40 m-5">
                {isFinished && <div
                    className="text-2xl justify-center flex absolute w-40 h-10 bg-gradient-to-br from-sol-green to-blue-500 text-white rounded ml-8">
                    Collected
                </div>}
                <ItemImage isLoading={false}/>
            </div>
            <div className="text-sol-white text-xl font-bold truncate hover:text-clip px-5 text-center">
                {item.name}
            </div>
            <div className="text-sol-white justify-center flex px-1">
                <IoMdPricetags className="mt-1 mr-1"/>
                <div>
                    price: {price}
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1">
                <BiTimeFive className="mt-1 mr-1"/>
                <div>
                    time to unlock: {time}
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1">
                <ImCheckmark className="mt-1 mr-1"/>
                <div>
                    Collected: {collected}/{all}
                </div>
            </div>
            <div className="justify-center flex mb-5 mt-2">
                <BlueGreenButton onClick={() => console.log('clicked')} title="Learn more"/>
            </div>
        </div>
    );
};

export default EventItem;