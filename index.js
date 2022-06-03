export const sayHi = (name) => {
    return `Hi ${name}`;
}

export const sum = (numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}