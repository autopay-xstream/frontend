import { createApolloClient } from "./apollo";
import { gql } from "@apollo/client";
import {
  INCOMING_STREAMS,
  OUTGOING_STREAMS,
  TOKEN_STATISTICS,
  xSTREAM_INFLOW,
  xSTREAM_OUTFLOW,
} from "./graphQueries";

export const fetchxStreamInflow = async (address, selectedToken, uri) => {
  let apolloClient = createApolloClient(uri);
  const result = await apolloClient.query({
    query: gql(xSTREAM_INFLOW),
    variables: {
      receiver: address,
    },
  });
  console.log("The inflow graphQL result ", result);
  return result;
};

export const fetchxStreamOutflow = async (address, selectedToken, uri) => {
  console.log("The received address", address, uri);
  try {
    let apolloClient = createApolloClient(uri);
    const result = await apolloClient.query({
      query: gql(xSTREAM_OUTFLOW),
      variables: {
        sender: address,
        selectedToken: selectedToken,
      },
    });
    console.log("The outflow graphQL result is ", result);
    // here we get the array of events triggered by xstream of {receiverAddress, destinationDomain, selectedToken}
    // pass this result array iteratively into superfluid subgraph
    return result;
  } catch (error) {
    console.log("Error in querying fetchxStreamOutflow", error);
    console.log(error?.networkError?.result?.errors);
  }
};

export const fetchTokenStatistic = async (tokenAddress, uri) => {
  let apolloClient = createApolloClient(uri);
  const result = await apolloClient.query({
    query: gql(TOKEN_STATISTICS),
    variables: {
      tokenAddress: tokenAddress,
    },
  });
  console.log("The token statistics graphQL result is ", result);
  return result;
};

export const fetchSuperfluidOutflow = async (
  tokenAddress,
  userAddress,
  uri
) => {
  let apolloClient = createApolloClient(uri);
  const result = await apolloClient.query({
    query: gql(
      `
            query flowUpdatedEvents(
                where: {receiver: ${userAddress}, token: ${tokenAddress}}
                orderBy: timestamp
                ) {
                  id
                  timestamp
                  sender
                  receiver
                  flowRate
                  totalReceiverFlowRate
                  totalSenderFlowRate
                  transactionHash
                  totalAmountStreamedUntilTimestamp
                  flowOperator
                  token
                  gasPrice
                  gasUsed
                  deposit
                  blockNumber
                  stream {
                    createdAtBlockNumber
                    createdAtTimestamp
                    updatedAtTimestamp
                    id
                    currentFlowRate
                    deposit
                  }
                }
            `
    ),
    variables: {
      sender: userAddress,
      token: tokenAddress,
    },
  });
  console.log("The token fetchSuperfluidOutflow result is ", result);
  return result;
};

export const fetchSuperfluidInflow = async (tokenAddress, userAddress, uri) => {
  let apolloClient = createApolloClient(uri);

  console.log(
    "subgraph params ",
    apolloClient,
    `${tokenAddress.toLowerCase()}`,
    userAddress.toLowerCase(),
    uri
  );
  const result = await apolloClient.query({
    query: gql(INCOMING_STREAMS),
    variables: {
      receiver: `${userAddress.toLowerCase()}`,
      token: `${tokenAddress.toLowerCase()}`,
    },
  });
  console.log("The token fetchSuperfluidInflow result is ", result);
  return result;
};

export const superfluidInflowStreamData = async (
  userAddress,
  tokenAddress,
  uri
) => {
  let apolloClient = createApolloClient(uri);
  const result = await apolloClient.query({
    query: gql(
      `
            query { streams(
                  where: {receiver: "${userAddress.toLowerCase()}", token: "${tokenAddress.toLowerCase()}"}
                ) {
                  createdAtBlockNumber
                  createdAtTimestamp
                  currentFlowRate
                  id
                  deposit
                  streamedUntilUpdatedAt
                updatedAtBlockNumber
                    updatedAtTimestamp
                  receiver {
                    id
                  }
                  sender {
                    id
                  }
                  token {
                    id
                    name
                    symbol
                    underlyingAddress
                    isSuperToken
                    decimals
                  }
                  flowUpdatedEvents(where: {receiver: "${userAddress.toLowerCase()}"}) {
                    transactionHash
                    gasPrice
                    gasUsed
                  }
                }
            }
            `
    ),
  });
  return result;
};
