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

