function factorialWhile(x) {
    let result = 1;
    let i = 1;
    while (i <= x) {
      result *= i;
      i++;
    }
    return result;
  }
  
  console.log(factorialWhile(10));