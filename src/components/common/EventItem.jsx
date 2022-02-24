import React, {useEffect, useState} from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";
import Slider from "./slider/Slider";
import BlueGreenButton from "./buttons/BlueGreenButton";
import {getNFT} from "../../API/solana/requests";
import SmallLoader from "./loader/SmallLoader";

const EventItem = ({item}) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const urls = []
        for (const nft of item.nfts){
            const resp = await getNFT(nft)
            urls.push(resp.image)
        }
        return urls
    }

    useEffect(() => {
        getImages().then(r => setImages(r))
    }, [])

    const time = item.duration
    const all = item.nfts.length
    const collected = '?'

    return (
        <div className="border-solid border-2 border-sol-white rounded-lg w-60 h-100 m-5 transition-shadow">
            <div className="border-solid border-2 border-sol-white rounded-lg h-40 m-5">
                {item.isFinished &&
                    <div
                        className="z-10 bg-blend-overlay text-2xl justify-center flex absolute w-40 h-10 bg-gradient-to-br from-sol-green to-blue-500 text-white rounded-md ml-[32px]">
                        Collected
                    </div>
                }
                {images.length === 0 &&
                    <div className="object-center w-full h-40">
                        <SmallLoader/>
                    </div>
                }
                <Slider className="z-0" itemsUrls={images}/>
            </div>
            <div className="text-sol-white text-xl font-bold truncate hover:text-clip px-5 text-center">
                {item.owner}
            </div>
            <div className="text-sol-white justify-center flex px-1">
                <IoMdPricetags className="mt-1 mr-1"/>
                <div>
                    price: {item.sale} {item.currency}
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