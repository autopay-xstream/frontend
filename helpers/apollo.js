import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import { getNetwork } from "@wagmi/core";
import { bridgeDataConfig } from "@/data/config";

const {chain} = getNetwork();

const httpLink = createHttpLink({
    uri: bridgeDataConfig[chain?.id],
});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
        },
    };
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
