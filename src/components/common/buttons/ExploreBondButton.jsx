import React from 'react';

const ExploreBondButton = ({title, onClick}) => {
    return (
        <button
            className="text-2xl text-sol-white justify-center text-center mx-40 p-5 hover:bg-sol-gray-button-hover rounded-lg
            active:bg-sol-gray-button-active rounded-lg focus:bg-sol-gray-button-focus rounded-lg"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default ExploreBondButton;