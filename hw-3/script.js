
let question = +prompt('Скільки вам років?')
let validate = Math.sign(question) == -1 || Math.sign(question) == 0
let ageValidFirst = question == 1 || question == 21 || question == 31 || question == 41 || question == 51 || question == 61 || question == 71 || question == 81 || question == 91
let ageValidSecond = question > 1 && question <= 4 || question > 21 && question <= 24 || question > 31 && question <= 34 || question > 41 && question <= 44 || question > 51 && question <= 54 || question > 61 && question <= 64 || question > 71 && question <= 74 || question > 81 && question <= 84 || question > 91 && question <= 94
if (validate) {
    console.log('невірне значення')
} else if (ageValidFirst) {
    console.log('Вам ' + question + ' рік');
} else if (ageValidSecond) {
    console.log('Вам ' + question + ' роки');
}
else console.log('Вам ' + question + ' років');



