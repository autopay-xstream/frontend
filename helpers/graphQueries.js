/////////////////////////////////////// Superfluid /////////////////////////////////

export const INCOMING_STREAMS = `
    query incomingStreamEvents($receiver: Bytes, $superToken: Bytes) {
        flowUpdatedEvents(
        where: {receiver: $receiver, token: $superToken}
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
    }
`;

export const OUTGOING_STREAMS = `
query outgoingStreamEvents ($sender: Bytes, $superToken: Bytes) {
    flowUpdatedEvents(
      where: {sender: $sender, token: $superToken}
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
}
`;
export const TOKEN_STATISTICS = `
  query tokenStreamInfo ($tokenAddress: Bytes) {
    tokenStatistics (where: {token: $tokenAddress}){
      totalOutflowRate
      totalNumberOfActiveStreams
    }
  }
`;
////////////////////////////////// xStream ////////////////////////////////////
export const xSTREAM_INFLOW = `
  query xStreamInflow($receiver: Bytes) {
    xStreamFlowTriggers(
      where : {receiver: $receiver}
    ) {
      sender
      receiver
      selectedToken
      flowRate
      streamStatus
      startTime
      bufferFee
      networkFee
      destinationDomain
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const xSTREAM_OUTFLOW = `
query xStreamOutflow($sender: Bytes) {
  xStreamFlowTriggers(
    where : {sender: $sender}
  ) {
    sender
    receiver
    selectedToken
    flowRate
    streamStatus
    startTime
    bufferFee
    networkFee
    destinationDomain
    blockNumber
    blockTimestamp
    transactionHash
  }
}
`;

/////// Target subgraph
// query MyQuery {
//   streams(
//     where: {receiver:"0xbfd232cebe066d048bdd042d285cc7924171323f", token: "0xfb5fbd3b9c471c1109a3e0ad67bfd00ee007f70a"}
//   ) {
//     createdAtBlockNumber
//     createdAtTimestamp
//     currentFlowRate
//     id
//     receiver {
//       id
//     }
//   }
// }