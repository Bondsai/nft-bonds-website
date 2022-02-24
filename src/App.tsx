import React, {useState} from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/common/navbar/Navbar";
import {useWalletConnection} from "./hooks/useWalletConnection";

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
            <div className="min-h-screen">
                <div className="fixed inset-0"
                     style={{
                         zIndex: "0",
                         background: 'rgb(35,39,45)',
                         backgroundImage: 'linear-gradient(to left bottom, #131823, #152635, #123646, #074755, #00585f, #00585f, #00585f, #00585f, #074755, #123646, #152635, #131823)',
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat"
                     }}
                >
                    <Navbar/>
                    <div className="pt-[72px]">
                        <AppRouter/>
                    </div>
                </div>
            </div>
        </AccountContext.Provider>
    )
}

export default App;
