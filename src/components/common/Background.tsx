import React from 'react';

const Background: React.FC = ({children}) => {
    return <div className="fixed inset-0 overflow-auto h-auto"
                style={{
                    zIndex: "0",
                    background: 'rgb(35,39,45)',
                    backgroundImage: 'linear-gradient(to left bottom, #131823, #152635, #123646, #074755, #00585f, #00585f, #00585f, #00585f, #074755, #123646, #152635, #131823)',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
    >
        {children}
    </div>
};

export default Background;