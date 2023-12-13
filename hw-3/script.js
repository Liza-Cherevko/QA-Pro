
let question = +prompt('Скільки вам років?')

if (Math.sign(question) == -1) {
    console.log('невірне значення')
} else if (question == 1) {
    console.log('Вам ' + question + ' рік');
} else if (question > 1 && question <= 4) {
    console.log('Вам ' + question + ' роки');
} else console.log('Вам ' + question + ' років');



