import { useAccount } from "wagmi";
import { getNetwork } from "@wagmi/core";
import { createContext } from "react";

export const AuthContext = createContext({
    userAddress: "",
    chain: null,
    isConnected: null
})

const AuthProvider = ({children}) => {
    const {address, isConnected} = useAccount();
    const {chain} = getNetwork();

    return (
        <AuthContext.Provider
            value={{
                userAddress: address,
                chain: chain,
                isConnected: isConnected
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;