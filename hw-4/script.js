let measurement = prompt('Введіть перше значення на вибір км, години, кілограми');
let quantity = +prompt('Введіть кількість');

if (measurement === 'км') {
    alert(quantity + 'км ' + '= ' + (quantity * 1000) + 'метрів')
} else if (measurement === 'год') {
    alert(quantity + 'год ' + '= ' + (quantity * 60) + 'хвилин')
} else if (measurement === 'кг') {
    alert(quantity + 'кг ' + '= ' + (quantity * 1000) + 'грамів')
} else alert('невірне значення')

