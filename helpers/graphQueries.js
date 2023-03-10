/////////////////////////////////////// Superfluid /////////////////////////////////

export const INCOMING_STREAMS = `
    query incomingStreamEvents($receiver: Bytes) {
        flowUpdatedEvents(
        where: {receiver: $receiver}
        orderBy: timestamp
        ) {
        timestamp
        sender
        receiver
        flowRate
        totalAmountStreamedUntilTimestamp
        flowOperator
        token
        }
    }
`;

export const OUTGOING_STREAMS = `
query outgoingStreamEvents ($sender: Bytes) {
    flowUpdatedEvents(
      where: {sender: $sender}
      orderBy: timestamp
    ) {
      timestamp
      sender
      receiver
      flowRate
      totalAmountStreamedUntilTimestamp
      flowOperator
      token
    }
}
`

////////////////////////////////// xStream ////////////////////////////////////
export const xSTREAM_INFLOW = `
  query xStreamInflow($receiver: Bytes) {
    xStreamFlowTriggers(
      where : {selectedToken: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1", receiver: $receiver}
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
`

export const xSTREAM_OUTFLOW = `
query xStreamOutflow($sender: Bytes) {
  xStreamFlowTriggers(
    where : {selectedToken: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1", sender: $sender}
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
`