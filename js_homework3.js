function pow(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result = result * x; 
  }

  return result;
}

console.log(pow(6, 4)); 
console.log(pow(3, 7)); 