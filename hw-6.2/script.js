function pad(str, char, length, addToStart) {
    if (str.length >= length) {
        return str;
    }

    const padLength = length - str.length;
    const padString = char.repeat(padLength);
    console.log(padLength)
    console.log(padString)
    return addToStart ? padString + str : str + padString;
}


console.log(pad('world', 'Hello my ', 4, true));
console.log(pad('world', '+', 7, true));


console.log(pad('world', 'Hello my ', 8, true));
console.log(pad('world', 'Hello my ', 12, true));
console.log(pad('world', 'Hello my ', 13, true));

console.log(pad('New', ' day', 4, false));
console.log(pad('New', ' day', 5, false));
console.log(pad('New', ' day', 6, false));