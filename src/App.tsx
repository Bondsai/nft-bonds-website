import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/common/navbar/Navbar";

const App: React.FC = () => (
    <div className="min-h-screen bg-sol-gray w-full">
        <Navbar/>
        <div className="pt-[60px] w-full">
            <AppRouter/>
        </div>
    </div>
)

export default App;
