import React, {useEffect, useState} from 'react';
import {BiTimeFive} from "react-icons/bi";
import {ImCheckmark} from "react-icons/im";
import {IoMdPricetags} from "react-icons/io";
import Slider from "./slider/Slider";
import BlueGreenButton from "./buttons/BlueGreenButton";
import {getNFT} from "../../API/solana/requests";
import SmallLoader from "./loader/SmallLoader";
import "../../styles.css"

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
        <div className="border-gradient w-60 h-100 m-5 transition-shadow bg-gray-900">
            <div className="border-gradient-pic h-40 mx-5 mt-5 mb-2">
                {item.isFinished &&
                    <ImCheckmark
                        className="z-10 p-2 bg-blend-overlay text-2xl justify-center flex absolute w-10 h-10 bg-sol-sea text-white rounded-tr-md rounded-bl-md ml-158px">
                    </ImCheckmark>
                }
                {images.length === 0 &&
                    <div className="object-center w-full h-40">
                        <SmallLoader/>
                    </div>
                }
                <Slider className="z-0" itemsUrls={images}/>
            </div>
            <div className="text-white text-xl font-bold truncate hover:text-clip px-5 text-center font-archivo">
                {item.owner}
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
                <IoMdPricetags className="mt-1 mr-1"/>
                <div>
                    price: {item.sale} {item.currency}
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
                <BiTimeFive className="mt-1 mr-1"/>
                <div>
                    time to unlock: {time}
                </div>
            </div>
            <div className="text-sol-white justify-center flex px-1 font-archivo">
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