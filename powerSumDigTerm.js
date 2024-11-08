/* 
8 + 1 = 9 and 9^2 = 81

512 = 5 + 1 + 2 = 8 and 8^3 = 512
8^2 = 64
8^3 = 512

513 = 5 + 1 + 2 = 9 
9^2 = 81
9^3 = 729

2401 = 2 + 4 + 0 + 1 = 7
7 ^ 2 = 49
7 ^ 3 = 343
7 ^ 4 = 2401

2402 = 2 + 4 + 0 + 2 = 8
8^2 = 64
8^3 = 512
8^4 = 4096


testing(powerSumDigTerm(1), 81); // true
testing(powerSumDigTerm(2), 512); // true
testing(powerSumDigTerm(3), 2401); // true
testing(powerSumDigTerm(4), 4913); // false
*/

console.clear();

const isNumValid = (num) => {
  const split = (num + "").split("").map((n) => +n);
  const base = split.reduce((curr, sum) => curr + sum, 0);

  if (base == 1) return false;

  const res1 = base ** 2;
  const res2 = base ** 3;
  const res3 = base ** 4;
  const res4 = base ** 5;
  const res5 = base ** 6;
  const res6 = base ** 7;

  return (
    res1 == num ||
    res2 == num ||
    res3 == num ||
    res4 == num ||
    res5 == num ||
    res6 == num
  );
};

const allNums = [81, 512];
function powerSumDigTerm(n) {
  // loop thru all possible numbers
  // check if that number meets the criteria
  // -- split the numbers
  // -- add the numbers = sum
  // -- check power from 2 to infinity
  // ---- if the result is less than the number, keep going
  // ---- if the result is greater than the number, break the loop and return false
  // ---- if the result is equal to the number, break the loop and return true
  // store that number in the array
  // check if (n-1)th index number exists
  // if so, return that number
  // otherwise, keep the loop going

  if (n < allNums.length) {
    return allNums[n - 1];
  }

  let i = allNums[allNums.length - 1] + 1;

  while (true) {
    if (i % 100 !== 0) {
      if (isNumValid(i)) {
        allNums.push(i);

        if (n < allNums.length) {
          return allNums[n - 1];
        }
      }
    }

    i++;
  }
}

const nums = new Array(12).fill("").map((_, i) => i + 1);

console.log(nums.map(powerSumDigTerm));
