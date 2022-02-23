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
            <div className="text-white opacity-90 font-archivo font-semibold md:px-[24px] max-md:py-[16px]
                            flex flex-col gap-[12px]"
            >
                <div className="inline-flex gap-2 items-center opacity-70">
                    {name}
                    <div data-tip={description} className="cursor-pointer">
                        <AiOutlineExclamationCircle size={14}/>
                    </div>
                    <ReactTooltip className='text-sm' type='dark' place='right' delayShow={200}/>
                </div>
                <div className="text-xl">
                    {children}
                </div>
            </div>
        </>
    );
});

export default EventInfoCell;