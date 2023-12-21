function myIsNaN(value) {
    if (typeof value === 'number' && value === value) {
        return false
    } else return true
}

console.log(myIsNaN(NaN));
console.log(myIsNaN(123));
console.log(myIsNaN('abc'));
console.log(myIsNaN(undefined));
console.log(myIsNaN({}));


console.log(isNaN(NaN));
console.log(isNaN(123));
console.log(isNaN('abc'));
console.log(isNaN(undefined));
console.log(isNaN({}));
