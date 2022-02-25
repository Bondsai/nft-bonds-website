import React, {useState} from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/common/navbar/Navbar";
import {useWalletConnection} from "./hooks/useWalletConnection";
import Background from "./components/common/Background";

export const AccountContext = React.createContext<{
    account: string,
    changeAccount: (account: string) => any
}>({
    account: '',
    changeAccount: (a) => console.log(a)
})

const App: React.FC = () => {

    const [address, setAddress] = useState('')
    useWalletConnection(
        setAddress,
        () => console.log("Not address found")
    )

    return (
        <AccountContext.Provider value={{
            account: address,
            changeAccount: setAddress
        }}>
            <div>
                <Background/>
                <Navbar/>
                <div className="pt-16 position:absolute">
                    <AppRouter/>
                </div>

            </div>
        </AccountContext.Provider>
    )
}

export default App;
