import React from 'react';
import SmallLoader from "../loader/SmallLoader";

const Image = ({isLoading}) => {
    return (
        <div>
            {isLoading ?
                <div className="object-center w-full h-40">
                    <SmallLoader/>
                </div>
                :
                <div>
                    Here your pictures
                </div>}
        </div>
    );
};

export default Image;