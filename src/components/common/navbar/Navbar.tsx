import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="inline-flex justify-between max-w-screen-MAX z-[100]
                        fixed top-0 mx-auto w-full bg-black bg-opacity-25 h-[50px]"
        >
            <Link to="/" className="text-blue-500 font-archivo font-bold text-lg">
                Solabond
            </Link>
            <Link to="/event">
                Basic event
            </Link>
            <Link to="/explore"
                  className="bg-solana-blue rounded-2xl px-5 py-2 text-black font-bold font-archivo"
            >
                Explore
            </Link>
        </div>
    );
};

export default Navbar;