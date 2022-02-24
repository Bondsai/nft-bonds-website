import React from 'react';
const bonsai = require('../resources/bonsai.jpeg')
const inst = require('../resources/inst.png')
const twitter = require('../resources/twitter.png')
const discord = require('../resources/disc.png')
const github = require('../resources/git.png')

const LandingPage = () => {
    return (
        <div>
            <img src={bonsai} className="w-full" alt="cover"/>
            <div className="bg-black w-full h-20">
                <div className="text-sol-white text-center text-4xl pt-1">
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