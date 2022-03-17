import React from 'react';

const ListItemLoader = () => {
    return (
        <div className="flex justify-center flex-row space-x-4">
            <div className="spinner-grow inline-block w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0"
                 role="status">
                <span className="visually-hidden ">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-blue-500 rounded-full opacity-0 text-blue-600"
                 role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-gradient-to-l from-green-400 to-blue-500 rounded-full opacity-0"
                 role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default ListItemLoader;