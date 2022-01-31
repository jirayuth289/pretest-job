export const isPrime = (N: number): boolean => {
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  return N > 1;
};

export const checkFibonacci = (N: number): boolean => {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;

  while (num2 <= N) {
    if (sum === N) {
      return true;
    }

    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }

  return false;
};
