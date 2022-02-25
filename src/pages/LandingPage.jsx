import React, {useRef} from 'react';
import BlueGreenButton from "../components/common/buttons/BlueGreenButton";
const bonsai = require('../resources/bonsai.jpeg')
const inst = require('../resources/inst.png')
const twitter = require('../resources/twitter.png')
const discord = require('../resources/disc.png')
const github = require('../resources/git.png')
const one = require('../resources/1.gif')
const one1 = require('../resources/picture_compress.gif')
const one2 = require('../resources/tree-bonsai-tree-black-hd-green-bonsai-plant-wallpaper-preview.jpg')

const LandingPage = () => {
    const titleRef = useRef()

    function handleBackClick() {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div className="bg-black flex justify-between bg-opacity-80">
                <div className="h-full w-full min-w-150px flex flex-col justify-around mt-[10%]">
                    <div className="text-sol-white text-center font-archivo flex items-center justify-center
                    text-xl m-5 xs:text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                        Just Bond It!
                    </div>
                     <div className="flex items-center justify-center">
                        <BlueGreenButton title="Learn more" onClick={handleBackClick}>
                        </BlueGreenButton>
                    </div>
                </div>
                {/*<img src={one} className="w-full h-full max-w-2xl flex-re" alt="animation tree"/>*/}
                <img src={one1} className="w-full h-full max-w-2xl" alt="animation tree"/>
            </div>
            <img ref={titleRef} src={one2} className="w-full" alt="cover"/>
            <img ref={titleRef} src={bonsai} className="w-full" alt="cover"/>
            <div className="bg-black w-full h-20">
                <div className="text-sol-white text-center text-4xl pt-1 font-archivo">
                    Contact Us
                </div>
                <div className="flex justify-center">
                    <a href="https://twitter.com/BondsaiPlatform">
                        <img src={twitter} className="w-6 h-5 m-1" alt="twitter"/>
                    </a>
                    <img src={inst} className="w-5 h-5 m-1" alt="instagram"/>
                    <img src={github} className="w-5 h-5 m-1" alt="gitHub"/>
                    <img src={discord} className="w-5 h-5 m-1" alt="discord"/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;