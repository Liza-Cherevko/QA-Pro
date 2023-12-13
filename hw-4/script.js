let measurement = prompt('Введіть перше значення на вибір км, години, кілограми');

let quantity = +prompt('Введіть кількість');

switch (measurement) {
    case measurement = 'км': alert(quantity + 'км ' + '= ' + (quantity * 1000) + 'метрів')
        break;
    case measurement = 'год': alert(quantity + 'год ' + '= ' + (quantity * 60) + 'хвилин')
        break;
    case measurement = 'кг': alert(quantity + 'кг ' + '= ' + (quantity * 1000) + 'грамів')
        break;
}

// типу з валідацією але після повторного запиту результат - невірне значення
// let measurement = prompt('Введіть перше значення на вибір км, години, кілограми');

// if (measurement !== 'км' && measurement !== 'год' && measurement !== 'кг') {
//     prompt('Введіть перше значення на вибір км, години, кілограми')
// }
// let quantity = +prompt('Введіть кількість');

// switch (measurement) {
//     case measurement = 'км': alert(quantity + 'км ' + '= ' + (quantity * 1000) + 'метрів')
//         break;
//     case measurement = 'год': alert(quantity + 'год ' + '= ' + (quantity * 60) + 'хвилин')
//         break;
//     case measurement = 'кг': alert(quantity + 'кг ' + '= ' + (quantity * 1000) + 'грамів')
//         break;

//     default: alert('невірне значення')
// }