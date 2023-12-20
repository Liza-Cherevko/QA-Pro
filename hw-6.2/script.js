function myPadStartEnd(str, char, num, bool) {
    let result;
    if (bool == true) {
        result = char.repeat(num) + str
    } else result = str + char.repeat(num)

    console.log(result)

}

myPadStartEnd('test', '+', 6, true);
myPadStartEnd('abcd', '9', 1, false);
myPadStartEnd('1234', '56', 2, false);
myPadStartEnd('new', ' world ', 2, false);