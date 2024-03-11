
let year  = +prompt('Скільки вам років?')

if (!isNaN(year ) && parseInt(year ) >= 0) { 
    if (parseInt(year) % 10 === 1 && parseInt(year) % 10 !== 11) { 
        alert(`Вам ${year} рік`)
    } else if ([2, 3, 4].includes(parseInt(year) % 10) && ![12, 13, 14].includes(parseInt(year) % 100)) {
        alert(year + " роки");
    }  else {
        alert(year + " років");
    }
} else {
    alert("Введено некоректне значення для року.");
}
