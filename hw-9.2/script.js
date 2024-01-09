let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var validEmails = arr.filter(function (obj) {
    return (obj.email.match(emailRegex) && (obj.email.includes('@gmail.com') || obj.email.includes('@yahoo.com')));
}).map(function (obj) {
    return obj.email;
});

console.log(validEmails);