import React, {useState} from 'react';
import SmallLoader from "../loader/SmallLoader";

const ItemImage = ({isLoading}) => {
    return (
        <div>
            {isLoading ?
                <div className="object-center w-full h-40">
                    <SmallLoader/>
                </div>
                :
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                     alt="image"
                     className="object-cover rounded-lg h-[156px] w-[193px]"
                />
            }
        </div>
    );
};

export default ItemImage;