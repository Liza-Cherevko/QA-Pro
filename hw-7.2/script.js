let services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

	"Миття голови": "100 грн"

};

services.newProperty = function (propertyName, propertyValue) {
    this[propertyName] = propertyValue + ' грн';
    console.log(services)
  };

services.getPrice=function(){
  let total = 0;
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        let priceString = this[key];
        let price = parseFloat(priceString.toString().replace(' грн', ''));
        if (!isNaN(price)) {
          total += price;
        }
      }
    }
   return total;
  }

services.minPrice = function(){
    minPrice = Infinity;
    for (let key in services) {
        let priceString = services[key];
        let price = parseFloat(priceString.toString().replace(' грн', ''));
        if (price < minPrice) {
            minPrice = price;
          }
    }

    return minPrice;
  }
  services.maxPrice = function(){
    var maxPrice = -Infinity;

    for (var key in this) {
      if (this.hasOwnProperty(key)) {
        let priceString = this[key];
        let price = parseFloat(priceString.toString().replace(' грн', ''));
        if (!isNaN(price) && price > maxPrice) {
          maxPrice = price;
        }
      }
    }
    return maxPrice;
  }





console.log(services.getPrice())
services.newProperty('Покраска', '20')
services.newProperty('Кератин', '700')
console.log(services)
console.log(services.minPrice())
console.log(services.maxPrice())