import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import SingOutButton from "../../components/common/buttons/SingOutButton";
import AccountAddress from "./AccountAddress";


interface ProfileProps {
    account: string
}

const SignedInProfilePage = React.memo<ProfileProps>(({
    account
}) => {
    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition ease-in duration-200"
                leaveFrom="transform translate-x-0"
                leaveTo="transform translate-x-full"
            >
                <Popover.Panel className="fixed right-0 top-[68px] h-[calc(100vh-68px)] flex-flex-col
                                          bg-[#131823] opacity-100 px-[20px] py-[10px]
                                          min-w-[240px]
                                          lg:min-w-[250px]
                                          border-l-[1px]
                                          border-l-sol-white"
                >
                    <div className="font-archivo">
                        <div className="mb-20">
                            <AccountAddress account={account}/>
                        </div>
                        <SingOutButton/>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    );
});

export default SignedInProfilePage;