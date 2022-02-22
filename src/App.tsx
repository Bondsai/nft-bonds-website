import React from "react";
import PurpleGreenButton from "./components/common/buttons/PurpleBlueButton";

const App: React.FC = () => (
    <div className="min-h-screen bg-sol-gray">
        <div className="text-sol-white p-40 text-3xl font-bold">
            <PurpleGreenButton>
                Solana
            </PurpleGreenButton>
        </div>
    </div>
)

export default App;
