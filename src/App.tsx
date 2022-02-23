import React, {useState} from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/common/navbar/Navbar";
import {useWalletConnection} from "./hooks/useWalletConnection";

export const AccountContext = React.createContext({
    account: '',
    changeAccount: (address: string) => console.log("default change account")
})

const App: React.FC = () => {

    const [address, setAddress] = useState('')
    useWalletConnection(
        setAddress,
        () => console.log("Not address found")
    )

    console.log(address)

    return (
        <AccountContext.Provider value={{
            account: address,
            changeAccount: setAddress
        }}>
            <div className="min-h-screen"
                 style={{
                     background: 'rgb(35,39,45)',
                     backgroundImage: 'linear-gradient(to left bottom, #131823, #152635, #123646, #074755, #00585f, #00585f, #00585f, #00585f, #074755, #123646, #152635, #131823)'
                 }}
            >
                <Navbar/>
                <div className="pt-[72px] w-full">
                    <AppRouter/>
                </div>
            </div>
        </AccountContext.Provider>
    )
}

export default App;
