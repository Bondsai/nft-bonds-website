import React from "react";
import BlueGreenButton from "./components/common/buttons/BlueGreenButton";
import PurpleBlueButton from "./components/common/buttons/BlueGreenButton";
import AddForm from "./components/common/forms/AddForm";

const App: React.FC = () => (
    <div className="min-h-screen bg-sol-gray">
        <nav className="container flex justify-around py-4 border-b-4 border-white-500 mx-auto bg-sol-gray">
            <div className="flex items-center">
                <h2 className="text-3xl font-medium text-blue-500">Solabond</h2>
            </div>
            {/*left*/}
            <div className="items-center hidden space-x-8 lg:flex text-white">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Blogs</a>
                <a href="">Our Team</a>
                <a href="">Contact Us</a>
            </div>
            {/*AASDASD*/}
            {/*<div className="flex items-center space-x-2">*/}
            {/*    <BlueGreenButton>*/}
            {/*        Sign in*/}
            {/*    </BlueGreenButton>*/}
            {/*    <BlueGreenButton>*/}
            {/*        Sign up*/}
            {/*    </BlueGreenButton>*/}
            {/*</div>*/}
        </nav>

        <AddForm buttonTitle={"submit"} placeholder={"nft address?"}/>

        {/*<div className="text-sol-white p-40 text-3xl font-bold">*/}
        {/*    <h1>Required NFTs</h1>*/}
        {/*    <PurpleGreenButton>*/}
        {/*        Solana*/}
        {/*    </PurpleGreenButton>*/}
        {/*</div>*/}
    </div>
)

export default App;
