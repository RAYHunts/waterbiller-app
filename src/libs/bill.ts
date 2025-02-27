const calculateAmountDue = (previous: number, current: number): number => {
    console.log(`Previous reading: ${previous}`);
    console.log(`Current reading: ${current}`);

    const consumption = current - previous;
    console.log(`Consumption: ${consumption}`);

    if (consumption <= 0) {
        console.log("Invalid reading (consumption <= 0)");
        return 0;
    }

    // Calculate high-rate units
    const countCurrent = (Math.floor(current / 10) * 5 + Math.min(current % 10, 5));
    console.log(`Count Current: ${countCurrent}`);

    const countPrevious = (Math.floor(previous / 10) * 5 + Math.min(previous % 10, 5));
    console.log(`Count Previous: ${countPrevious}`);

    const high = countCurrent - countPrevious;
    console.log(`High-rate units: ${high}`);

    const low = consumption - high;
    console.log(`Low-rate units: ${low}`);

    const amountDue = high * 10000 + low * 5000;
    console.log(`Amount Due: ${amountDue}`);

    return amountDue;
}

console.log(`Final Amount Due: ${calculateAmountDue(16, 21)}`);

export { calculateAmountDue };