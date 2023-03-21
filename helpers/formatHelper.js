export const truncateAddress = (address) => {
    if (address && typeof(address) == "string") {
        console.log("This is the input address ", address);
        return address.slice(0, 6) + "..." + address.slice(-4);
    }
    return '';
};

export const formatFlowrate = (flowrate) => {
    // the flowrate must be given in wei/sec -> converting to per day
    let flow = (flowrate * 24 * 60 * 60)/(10**18)
    return flow;
}

export const formatDate = (epoch) => {
    // the epoch is in milli seconds
    let date = new Date(epoch * 1000).toString().split("GMT")[0];
    return date;
}

export const formatWeiToGwei = (weiAmount) => {
    let gweiAmount = weiAmount * (10**9)
}

export const calculateFormatAmountStreamed = (flowRate, createdAtTimeStamp) => {
    // total amount streamed till now is = (flowrate * (currentTimestamp - createdAtTimestamp)) // this assumes constant flowrate
    const date = new Date;
    const currentTimeStamp = date.getTime();
    console.log("currentTimeStamp ", currentTimeStamp, createdAtTimeStamp);
    const amountStreamed = flowRate * ((currentTimeStamp/1000) - createdAtTimeStamp);
    console.log("amountStreamed pre format", amountStreamed);
    console.log("amountStreamed", (amountStreamed / (10**18)));
    return amountStreamed / (10**18);
}