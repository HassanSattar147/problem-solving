/* 
  10: 3 5 6 9
  15: 3 5 6 9 10 12
  25: 3 5 6 9 10 12 15 18 20 21 24
*/

const getSum = (x) => {
  if (x <= 0) return 0;
  let sum = 0;
  for (let i = 1; i < x; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(getSum(10));
console.log(getSum(15));
console.log(getSum(25));
