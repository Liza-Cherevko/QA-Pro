
let question = prompt('Скільки вам років?')
question = +question
let minNumber = 0
let negativeNum = '-'
let validate = question !== minNumber && question !== negativeNum
// if (validate) {
//     alert('невірне значення')
// } else if (question == 1) {
//     alert('Вам ' + question + ' рік');
// } else if (question > 1 && question <= 4) {
//     alert('Вам ' + question + ' роки');
// } else alert('Вам ' + question + ' років');

if (question == 1) {
    alert('Вам ' + question + ' рік');
} else if (question > 1 && question <= 4) {
    alert('Вам ' + question + ' роки');
} else alert('Вам ' + question + ' років');

console.log(typeof question)
