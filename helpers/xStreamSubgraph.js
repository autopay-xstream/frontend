import { createApolloClient } from "./apollo";
import { gql } from "@apollo/client";
import { OUTGOING_STREAMS, TOKEN_STATISTICS, xSTREAM_INFLOW, xSTREAM_OUTFLOW } from "./graphQueries";

export const fetchxStreamInflow = async (address, uri) => {
    let apolloClient = createApolloClient(uri);
    const result = await apolloClient.query({
        query: gql(xSTREAM_INFLOW),
        variables: {
            receiver: address
        }
    });
    console.log("The inflow graphQL result ", result);
    return result;
}

export const fetchxStreamOutflow = async (address, uri) => {
    console.log("The received address", address, uri);
    try {
        let apolloClient = createApolloClient(uri);
        const result = await apolloClient.query({
            query: gql(xSTREAM_OUTFLOW),
            variables: {
                sender: address
            }
        });
        console.log("The outflow graphQL result is ", result);
        return result;
    } catch (error) {
        console.log("Error in querying fetchxStreamOutflow", error);
        console.log(error?.networkError?.result?.errors);
    }

}

export const fetchTokenStatistic = async (tokenAddress, uri) => {
    let apolloClient = createApolloClient(uri);
    const result = await apolloClient.query({
        query: gql(TOKEN_STATISTICS),
        variables: {
            tokenAddress: tokenAddress
        }
    });
    console.log("The token statistics graphQL result is ", result);
    return result;
}

export const fetchSuperfluidOutflow = async(tokenAddress, userAddress, uri) => {
    let apolloClient = createApolloClient(uri);
    const result = await apolloClient.query({
        query: gql(OUTGOING_STREAMS),
        variables: {
            sender: userAddress,
            token: tokenAddress
        }
    });
    console.log("The token fetchSuperfluidOutflow result is ", result);
    return result;
}