var services = {
  "Комп'ютерна діагностика": "500 грн",
  "Заміна мастила та фільтрів": "800 грн",
  "Діагностика сажового фільтра (DPF)": "600 грн",
  "Заміна масла в АКПП": "1500 грн",

  // Метод загальної вартості
  price: function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        total += parseInt(this[key]);
      }
    }
    return total + " грн";
  },

  // Метод мінімальної ціни
  minPrice: function() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        let currentPrice = parseInt(this[key]);
        if (currentPrice < min) {
          min = currentPrice;
        }
      }
    }
    return min + " грн";
  },

  // Метод максимальної ціни
  maxPrice: function() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        let currentPrice = parseInt(this[key]);
        if (currentPrice > max) {
          max = currentPrice;
        }
      }
    }
    return max + " грн";
  }
};

// Додаємо нову послугу
services['Заміна ременя ГРМ'] = "3500 грн";

// Перевірка роботи методів
console.log("Загальна вартість ремонту:", services.price()); // Виведе: 6900 грн
console.log("Найдешевша послуга:", services.minPrice());       // Виведе: 500 грн
console.log("Найдорожча послуга:", services.maxPrice());       // Виведе: 3500 грн