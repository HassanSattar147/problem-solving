// brute force

const getDigitsArray = (n) => (n + "").split("");

const num = 362;
const digits = getDigitsArray(362);

function generatePermutations(arr, r, current, result) {
  if (current.length === r) {
    result.add(current);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    // To avoid using the same element multiple times
    generatePermutations(arr, r, current + arr[i], result);
  }
}

function uniqueCombinations(arr) {
  const result = new Set();

  // Generate combinations of all lengths
  for (let r = 1; r <= arr.length; r++) {
    generatePermutations(arr, r, "", result);
  }

  return Array.from(result).sort();
}

const combinations = uniqueCombinations(digits);
console.log(combinations);
