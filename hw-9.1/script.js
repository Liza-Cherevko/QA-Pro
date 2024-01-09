
let pattern = /^[^Aa]{6}$/
var stringsToCheck = ["abcdef", "AbC123", "abcABC", "lkjhgf", "aBcdEf", '123456'];

stringsToCheck.forEach(function (str) {
    if (pattern.test(str)) {
        console.log("Рядок " + str + " відповідає умовам")
    } else console.log("Рядок " + str + " не відповідає умовам")
})

