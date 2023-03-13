import { useAccount } from "wagmi";
import { getNetwork } from "@wagmi/core";
import { createContext } from "react";

export const AuthContext = createContext({
    address: "",
    chain: null
})

const AuthProvider = ({children}) => {
    const {address, isConnected} = useAccount();
    const {chain} = getNetwork();

    return (
        <AuthContext.Provider
            value={{
                address: address,
                chain: chain
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;