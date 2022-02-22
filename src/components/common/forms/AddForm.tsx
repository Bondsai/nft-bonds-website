import React from 'react';
import PurpleGreenButton from "../buttons/PurpleBlueButton";
import PurpleBlueButton from "../buttons/PurpleBlueButton";

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
                <PurpleGreenButton props>{buttonTitle}
                </PurpleGreenButton>
            </form>
        </div>
    );
});

export default AddForm;