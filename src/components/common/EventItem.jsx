import React, {useState} from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";
import PurpleBlueButton from "./buttons/PurpleBlueButton";
import Slider from "./slider/Slider";

const EventItem = ({item}) => {
    const [isFinished, setIsFinished] = useState(item.isFinished)
    const imgs = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://cnews24.ru/uploads/3f9/3f9a3925a371717aafd19690a2cdd880eb3e256b.png",
        "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
    ]

    const time = "5 days"
    const price = "10 backs"
    const all = 10
    const collected = 5

    return (
        <div className="border-solid border-2 border-sol-white rounded-lg w-60 h-100 m-5 transition-shadow">
            <div className="border-solid border-2 border-sol-white rounded-lg h-40 m-5">
                {isFinished && <div
                    className="z-10 bg-blend-overlay text-2xl justify-center flex absolute w-40 h-10 bg-gradient-to-br from-sol-green to-blue-500 text-white rounded-md ml-[32px]">
                    Collected
                </div>}
                <Slider className="z-0" itemsUrls={imgs}/>
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
                <PurpleBlueButton onClick={() => console.log('clicked')} title="Learn more"/>
            </div>
        </div>
    );
};

export default EventItem;