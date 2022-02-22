import React from 'react';

const PurpleGreenButton = (props) => {
    const {children, ...rest} = props
    return (
        <button className="px-7 py-3 bg-gradient-to-br from-sol-green to-blue-500 text-white rounded-xl"
                {...rest}
        >
            {children}
        </button>
    );
};

export default PurpleGreenButton;