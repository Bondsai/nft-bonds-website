import React from 'react';

interface PropTypes {
    size?: number,
    className?: string
}

const CardLoader = React.memo<PropTypes>(({size = 300, ...props}) => {
    const gradient = (direction: string) =>
        `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`

    return (
        <div {...props}>
            <div className="flex flex-col ring-1 rounded-xl ring-gray-200 overflow-hidden animate-pulse w-full
                        transform hover:shadow-mjol-gray-xs hover:ring-inset hover:-translate-y-[1px]"
            >
                {/* Image block */}
                <div style={{
                    width: size,
                    aspectRatio: "1/1",
                    background: gradient('right')
                }}>
                </div>

                <div className="py-2 px-2 xxs:px-5 space-y-0.5 mt-0.5">
                    {/* Title block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: '18px'
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "35%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "20%"
                        }}/>
                    </div>

                    {/* Subtitle block */}
                    <div className="inline-flex justify-between w-full rounded-lg overflow-hidden"
                         style={{
                             height: "15px"
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "50%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "25%"
                        }}/>
                    </div>
                </div>

                {/* Price block */}
                <div className="w-full mt-4 px-2 xxs:px-5 pt-3 pb-1"
                     style={{
                         background: "linear-gradient(rgba(229, 232, 235, 0.392) 0%, rgb(255, 255, 255) 20%)"
                     }}>
                    <div className="inline-flex w-full justify-between rounded-lg overflow-hidden"
                         style={{
                             height: '17px'
                         }}
                    >
                        <div style={{
                            background: gradient('right'),
                            width: "50%",
                        }}/>
                        <div style={{
                            background: gradient('left'),
                            width: "25%"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CardLoader;