
var pattern = /^(?!.*[Aa]).{6,}$/
var stringsToCheck = ["abcdef", "AbC123", "abcABC", "12345", "aBcdEf"];
stringsToCheck.forEach(function (str) {
    if (pattern.str) {
        console.log("Рядок " + str + " відповідає умовам")
    } else console.log("Рядок " + str + " не відповідає умовам")
})
