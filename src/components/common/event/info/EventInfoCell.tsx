import React from 'react';
import ReactTooltip from "react-tooltip";
import {AiOutlineExclamationCircle} from 'react-icons/ai'

interface EventInfoCellProps {
    name: string,
    description?: string,
    children: React.ReactNode
}

const EventInfoCell = React.memo<EventInfoCellProps>(({
    name,
    description,
    children
}) => {
    return (
        <>
            <div className="text-white opacity-90 font-archivo md:px-6 max-md:py-4
                            flex flex-col gap-3"
            >
                <div className="inline-flex gap-2 items-center opacity-70 text-sm">
                    {name}
                    <div data-tip={description} className="cursor-pointer">
                        <AiOutlineExclamationCircle size={14}/>
                    </div>
                    <ReactTooltip className='text-sm' type='dark' place='right' delayShow={200}/>
                </div>
                <div className="text-md font-semibold">
                    {children}
                </div>
            </div>
        </>
    );
});

export default EventInfoCell;