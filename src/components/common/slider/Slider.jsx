import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import React from "react";
import {Img} from "react-image";
import logo from './brokenImgae.png'
import NewSmallLoader from "../loader/NewSmallLoader";


const Slider = ({props, itemsUrls}) => {
    SwiperCore.use([Autoplay])

    return (
        <Swiper
            props={props}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            className="object-cover rounded-lg h-156px w-193px"
            slidesPerView={1}
            centeredSlides
        >
            {itemsUrls.map(url =>
                <SwiperSlide key={url}>
                    <Img src={url}
                         className="object-cover rounded-md h-[156px] w-[192px]"
                         loader={<div className="object-center w-full h-40">
                             <NewSmallLoader/>
                         </div>}
                         unloader={
                             <img src={logo} alt="" className="object-center w-full h-40 px-5"/>
                         }
                    />
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default Slider;