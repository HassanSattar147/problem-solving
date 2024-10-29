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

  let i = 2;
  while (true) {
    const result = base ** i;
    if (result == num) return true;
    else if (result > num) return false;
    i++;
  }
};

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

  const allNums = [81, 512];
  if (n == 1) return allNums[0];
  if (n == 2) return allNums[1];
  let i = 513;
  while (true) {
    if (isNumValid(i)) {
      allNums.push(i);
      if (allNums[n - 1]) {
        return allNums[n - 1];
      }
    }
    i++;
  }

}

const nums = new Array(12).fill("").map((_, i) => i + 1);

console.log(nums.map(powerSumDigTerm));
