function factorialBreak(x) {
    let result = 1;
    let i = 1;
    while (true) {
      if (i > x) {
        break;
      }
      result *= i;
      i++;
    }
    return result;
  }
  
  console.log(factorialBreak(10));