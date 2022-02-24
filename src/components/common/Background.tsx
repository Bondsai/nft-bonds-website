import React from 'react';

const Background: React.FC = React.memo(() => {
    return <div className="fixed inset-0"
                style={{
                    zIndex: "-1",
                    background: 'rgb(35,39,45)',
                    backgroundImage: 'linear-gradient(to left bottom, #131823, #152635, #123646, #074755, #00585f, #00585f, #00585f, #00585f, #074755, #123646, #152635, #131823)',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
    />
});

export default Background;