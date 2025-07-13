// Basic, Bad and NOT perfect Hash Function.
/*
const hash = (key, arrLength) => {
    let total = 0;
    for(let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrLength;
    }
    return total
}
*/


// Better than basic, but Not PERFECT Hash Function
const arr = ["pink", "orange", "purple", "blue", "red", "black"];
const hash = (key, arrLength) => {
    let total = 0;
    let PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % arrLength;
    }
    return [total, `key: ${key}`]
}

console.log(hash("cyan", arr.length));