import { useAccount } from "wagmi";
import { getNetwork } from "@wagmi/core";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    userAddress: "",
    chain: null,
    isConnected: null,
    viewChain: null,
    setViewChain: () => {}
})

const AuthProvider = ({children}) => {
    const {address, isConnected} = useAccount();
    const {chain} = getNetwork();
    const [viewChain, setViewChain] = useState({
        name: "goerli",
        id: 5
    });

    return (
        <AuthContext.Provider
            value={{
                userAddress: address,
                chain: chain,
                isConnected: isConnected,
                viewChain: viewChain,
                setViewChain: setViewChain
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;