export const truncateAddress = (address) => {
    if (address) {
        return address.slice(0, 6) + "..." + address.slice(-4);
    }
    return '';
};