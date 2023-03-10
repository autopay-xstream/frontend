import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";


const TESTNET_URL_GOERLI = "https://api.thegraph.com/subgraphs/name/aditya172926/xstream";
const TESTNET_URL_MUMBAI = "https://api.thegraph.com/subgraphs/name/aditya172926/xstreammumbai";

const httpLink = createHttpLink({
    uri: TESTNET_URL_GOERLI,
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
