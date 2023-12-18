// #1
// let str = " "
// function triangle(lines, symbol) {
//     for (let i = 0; i <= lines; i++) {
//         str += symbol;
//         console.log(str);
//     }
// }

// triangle(5, '#')


// #2

let i = 0;
let str = " ";
function triangle(lines, symbol) {
    while (i < lines) {
        str += symbol;
        i++;
        console.log(str);
    }
}
triangle(5, '$')