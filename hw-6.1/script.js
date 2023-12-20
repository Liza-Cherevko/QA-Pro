
function myIsNan(value) {
    if (typeof value === 'number') {
        return false
    } else return true
}
console.log(myIsNan('test'));
console.log(myIsNan(45));
console.log(myIsNan(NaN));