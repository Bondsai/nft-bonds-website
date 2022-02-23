import React from 'react';

interface BorderProps {
    pxHeight: number
}

const GreenBluePinkBorder = React.memo<BorderProps>(({pxHeight}) => {
    return (
        <div className={`h-[${pxHeight}px] w-full`}
             style={{
                 backgroundImage: "radial-gradient(circle farthest-corner at 0 0,#00ffbd,#2300ab 52%,#c100ba 100%)"
             }}>

        </div>
    );
});

export default GreenBluePinkBorder;