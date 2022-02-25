import React from 'react';
import {Link} from "react-router-dom";
import {GiBonsaiTree} from "react-icons/gi";

const LogoLink = () => {
    return (
         // <Link to="/" className="text-sol-green font-extrabold text-2xl">
        <div className="inline-flex gap-2 items-center text-sol-green font-extrabold text-2xl"
             style={{
                 letterSpacing: 2
             }}
        >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-300">
                BONDSAI
            </div>
            <div className="text-blue-300">
                <GiBonsaiTree/>
            </div>
        </div>
         // </Link>
    );
};

export default LogoLink;