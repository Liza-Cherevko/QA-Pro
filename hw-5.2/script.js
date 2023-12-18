// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 !== 0) {
//         let num = i;
//         sum += num;
//         console.log(sum)
//     }

// }
function calculateTotal() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    console.log(sum)
    return sum;
}
calculateTotal()


