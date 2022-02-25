import React from 'react';
import {IconContext} from "react-icons";
import {MdCreate} from "react-icons/md";
import EventTitle from "../../components/common/event/EventTitle";
import FloatingLabelInput from "./FloatingLabelInput";

interface Props {
    setEventName: (s: string) => void
    setVestingPeriod: (n: number) => void
    setEventDuration: (n: number) => void
    setEventCreated: (b: boolean) => void
}

const CreateEvent = React.memo<Props>(({
                                           setEventName,
                                           setVestingPeriod,
                                           setEventDuration,
                                           setEventCreated
                                       }) => {
    return (
        <div className="w-1/3 mx-auto pt-12">
            <div className="flex items-center justify-center gap-2">
                <IconContext.Provider
                    value={{color: "white", size: "2em"}}>
                    <MdCreate/>
                </IconContext.Provider>
                <EventTitle title={"Create event"}/>
                <IconContext.Provider
                    value={{color: "white", size: "2em"}}>
                    <MdCreate className="invisible"/>
                </IconContext.Provider>
            </div>
            <div className="flex flex-col mt-4 space-y-4">
                <FloatingLabelInput inputType={"text"} id={"event-name"}
                                    placeholder={"Event name"} func={setEventName}/>
                <FloatingLabelInput inputType={"number"} id={"period"}
                                    placeholder={"Vesting period"} func={setVestingPeriod}/>
                <FloatingLabelInput inputType={"number"} id={"duration"}
                                    placeholder={"Duration"} func={setEventDuration}/>

                <button className="font-archivo font-semibold px-4 py-2 text-white opacity-90
                           bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl
                           self-start
                           w-1/3
                           mx-auto
                           hover:to-blue-500 hover:from-purple-300"
                        onClick={() => setEventCreated(true)}>
                    Create
                </button>
            </div>
        </div>
    );
});

export default CreateEvent;