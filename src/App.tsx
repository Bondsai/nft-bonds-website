import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/common/navbar/Navbar";

const App: React.FC = () => (
    <div className="min-h-screen"
         style={{
             /* Created with https://www.css-gradient.com */
             background: 'rgb(35,39,45)',
             backgroundImage: 'linear-gradient(to top, rgba(0,90,71, 0.15) 0%, rgba(34,39,45,1) 100%)'
             // backgroundImage:'radial-gradient(rgba(128, 236, 255, 0.2) 0%, rgba(34,39,45,1) 100%)'
             // background: '#0F2027',
             // backgroundImage: 'linear-gradient(to right, #16222a, #3a6073)'

         }}
    >
        <Navbar/>
        <div className="pt-[72px] w-full">
            <AppRouter/>
        </div>
    </div>
)

export default App;
