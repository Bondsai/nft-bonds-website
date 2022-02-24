import React from 'react';

const ExploreBondButton = ({title, onClick}) => {
    return (
        <div className="px-10 flex justify-center py-3">
            <button
                className="text-2xl text-sol-white justify-center text-center p-5 lg:mx-30 hover:bg-sol-gray-button-hover rounded-lg
            active:bg-sol-gray-button-active rounded-lg focus:bg-sol-gray-button-focus rounded-lg font-archivo"
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    );
};

export default ExploreBondButton;