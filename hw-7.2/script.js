let services = {

	"стрижка": 60,

	"гоління": 80,

	"Миття голови": 100

};

services.newProperty = function (propertyName, propertyValue) {
    this[propertyName] = propertyValue;
    console.log(services)
  };

services.getPrice=function(){
    let sum = 0;
    for (let key in services) {
      if (typeof services[key] == 'number') {
         sum += services[key];
      }
    }
    
    return sum;
}
services.minPrice = function(){
    minPrice = Infinity;
    for (let key in services) {
        let priceString = services[key];
        if (priceString < minPrice) {
            minPrice = priceString;
          }
    }

    return minPrice;
  }
  services.maxPrice = function(){
    maxPrice = -Infinity;
    for (let key in services) {
        let priceString = services[key];
        if (priceString > maxPrice) {
            maxPrice = priceString;
          }
    }

    return maxPrice;
  }


console.log(services.getPrice())
console.log(services.newProperty('Покраска', 20))
console.log(services.newProperty('Кератин', 700))
console.log(services.minPrice())
console.log(services.maxPrice())