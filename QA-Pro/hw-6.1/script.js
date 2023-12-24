let user = {
    name: 'Kate',
    sex: 'female',
    age: 25
}

user.getInfo = function () {
    for (var key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
        console.log(key + ': ' + this[key]);
      }
    }
  };


user.newProperty = function (propertyName, propertyValue) {
    this[propertyName] = propertyValue;
  };

console.log( user.newProperty('hairColor', 'black'));
console.log( user.newProperty('weight', '80'));
console.log(user)
console.log( user.getInfo(user));