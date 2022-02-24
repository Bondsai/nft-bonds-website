import React, {useState} from 'react';
import {shortenString} from "../../utils/string";
import {BsCheck} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";

interface AccountAddressProps {
    account: string
}

const AccountAddress = React.memo<AccountAddressProps>(({account}) => {

    const [isCopied, setIsCopied] = useState(false)

    return (
        <>
            <div className="text-lg font-bold text-white">
                Account
            </div>
            <div className="text-white opacity-70 text-sm font-semibold inline-flex gap-2 items-center">
                {shortenString(account, 10, 25)}
                {isCopied
                    ?
                    <BsCheck size={18}/>
                    :
                    <button onClick={() => {
                        navigator.clipboard.writeText(account).then()
                        setIsCopied(true)
                        setTimeout(() => setIsCopied(false), 1000)
                    }}>
                        <BiCopy size={15}/>
                    </button>
                }
            </div>
        </>
    );
});

export default AccountAddress;