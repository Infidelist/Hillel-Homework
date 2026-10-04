function pow(x, y) {
  if (y === 0) {
    return 1;
  }

  let result = 1;
  let isNegative = false; // Прапорець, щоб запам'ятати, чи був ступінь від'ємним

  if (y < 0) {
    isNegative = true;
    y = y * -1; // Перетворюємо мінус на плюс (наприклад, -3 стане 3)
  }

  for (let i = 0; i < y; i++) {
    result = result * x;
  }

  if (isNegative) {
    return 1 / result;
  }

  return result;
}


console.log(pow(5, 0));  // Виведе 1 (нульовий ступінь)
console.log(pow(5, 1));  // Виведе 5 (перший ступінь)
console.log(pow(2, 3));  // Виведе 8 (звичайне додатне число)
console.log(pow(2, -3)); // Виведе 0.125 (це 1 / 8, від'ємний ступінь)