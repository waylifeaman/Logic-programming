function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Error: pembagian dengan nol';
      return a / b;
    default:
      return 'Error: operator tidak dikenali';
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(122, 5, '*')); // 2
console.log(calculate(10, 5, '%')); // "Error: operator tidak dikenali"