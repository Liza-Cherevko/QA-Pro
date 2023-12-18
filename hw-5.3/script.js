
function degree(x, y) {
    // let result = x ** y
    // return result
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x
    }
    return result;
}

console.log(degree(2, 3))