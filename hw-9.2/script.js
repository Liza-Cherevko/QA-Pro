let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let filteredEmails = arr.filter(function (obj) {
    return (obj.email && emailRegex.test(obj.email) && (obj.email.endsWith("@gmail.com") || obj.email.endsWith("@yahoo.com")));

});
console.log(filteredEmails);