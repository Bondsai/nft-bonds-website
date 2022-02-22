import React from 'react';
import BlueGreenButton from "../buttons/BlueGreenButton";
import PurpleBlueButton from "../buttons/BlueGreenButton";

interface Params {
    placeholder: string
    buttonTitle: string
}

const AddForm = React.memo<Params>(({placeholder, buttonTitle}) => {

    return (
        <div>
            <form className="m-4 flex">
                <input
                    className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder={placeholder}/>
                <BlueGreenButton props>{buttonTitle}
                </BlueGreenButton>
            </form>
        </div>
    );
});

export default AddForm;