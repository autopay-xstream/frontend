import { apolloClient } from "./apollo";
import { gql } from "@apollo/client";
import { xSTREAM_INFLOW, xSTREAM_OUTFLOW } from "./graphQueries";

export const fetchxStreamInflow = async(address) => {
    const result = await apolloClient.query({
        query: gql(xSTREAM_INFLOW),
        variables: {
            receiver: address
        }
    });
    console.log("The inflow graphQL result ", result);
    return result;
}

export const fetchxStreamOutflow = async(address) => {
    const result = await apolloClient.query({
        query: gql(xSTREAM_OUTFLOW),
        variables: {
            sender: address
        }
    });
    console.log("The outflow graphQL result is ", result);
    return result;
}