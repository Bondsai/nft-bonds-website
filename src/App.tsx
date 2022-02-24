import React from "react";
import BlueGreenButton from "./components/common/buttons/BlueGreenButton";
import NftTable from "./components/common/forms/NftTable";

const App: React.FC = () => (
    <div className="min-h-screen">
        <nav className="container flex justify-around py-4 border-b-4 border-white-500 mx-auto bg-sol-gray">
            <div className="flex items-center">
                <h2 className="font-medium text-blue-500">Solabond</h2>
            </div>
            {/*left*/}
            <div className="items-center hidden space-x-8 lg:flex text-white">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Blogs</a>
                <a href="">Our Team</a>
                <a href="">Contact Us</a>
            </div>
            <div className="flex items-center space-x-2">
                <BlueGreenButton title={"sign in"}>
                </BlueGreenButton>
                <BlueGreenButton title={"sign up"}>
                </BlueGreenButton>
            </div>
        </nav>

        <NftTable/>
    </div>
)

export default App;
