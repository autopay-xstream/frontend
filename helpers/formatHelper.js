export const truncateAddress = (address) => {
    if (address) {
        return address.slice(0, 6) + "..." + address.slice(-4);
    }
    return '';
};

export const formatFlowrate = (flowrate) => {
    // the flowrate must be given in wei/sec -> converting to 
    let flow = (flowrate * 24 * 60 * 60)/(10**18)
    return flow;
}

export const formatDate = (epoch) => {
    // the epoch is in milli seconds
    let date = new Date(epoch * 1000);
    console.log("the date is" ,date);
    return date.toString();
}