console.clear();
console.log("=====");

// 24z6 1x23 y369 89a 900b
// 89 900 123 369 246
// 89 900 123 369 246
// ((((89 + 900) - 123) * 369) / 246)

// 24z6 1z23 y369 89z 900b
// 900 369 246 123 89
// 900 + 369 - 246 * 123 / 89
// 900 + 369 - 246 * 123 / 89

// 10a 90x 14b 78u 45a 7b 34y

// a10 x90 b14 u78 a45 b7 y34

// a10 a45 b14 b7 u78 x90 y34

// 10 45 14 7 78 90 34

// 10 + 45 - 14 * 7 / 78 + 90 - 34

// 10 + 45 - 14 * 7 / 78 + 90 - 34

/* 
  "24z6 1z23 y369 89z 900b" => 1414
  "24z6 1x23 y369 89a 900b" => 1299
  "10a 90x 14b 78u 45a 7b 34y" => 60
  "111a 222c 444y 777u 999a 888p" => 1459
  "1z 2t 3q 5x 6u 8a 7b" => 8
*/

const doMath = (string) => {
  // 0- 10a 90x 14b 78u 45a 7b 34y
  // 1- a10 x90 b14 u78 a45 b7 y34
  // 2- a10 a45 b14 b7 u78 x90 y34
  // 3- 10 45 14 7 78 90 34
  // 4- 10 + 45 - 14 * 7 / 78 + 90 - 34

  // separate all the number based on the delimiter (" ");
  // Detect an alphabet in the number string;
  // bring the alphabet at the beginning of the number string;
  // sort based on the alphabet that's brought to the start;
  // remove the alphabets
  // Do Calculations

  const splitNumbers = string.split(" ");
  const processedNumStrs = splitNumbers.map((numStr) => {
    const numStrSplit = numStr.split("");
    const alphaIndex = numStrSplit.map((x) => +x).findIndex((x) => isNaN(x));
    const [alphabet] = numStrSplit.splice(alphaIndex, 1);
    numStrSplit.unshift(alphabet);
    return numStrSplit.join("");
  });

  const sortedNumbers = processedNumStrs
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .map((x) => +x.substring(1, x.length));

  console.log(sortedNumbers);

  let result = sortedNumbers[0];

  for (let i = 1; i < sortedNumbers.length; i++) {
    const operation = ["+", "-", "*", "/"][(i - 1) % 4];
    result = eval(`${result}${operation}${sortedNumbers[i]}`);
  }

  return Math.round(result);
};

[
  ["24z6 1z23 y369 89z 900b", 1414],
  ["24z6 1x23 y369 89a 900b", 1299],
  ["10a 90x 14b 78u 45a 7b 34y", 60],
  ["111a 222c 444y 777u 999a 888p", 1459],
  ["1z 2t 3q 5x 6u 8a 7b", 8],
].forEach((test) => {
  const [input, output] = test;
  const res = doMath(input);
  console.log(`Test result: ${output == res ? "PASS" : "FAIL"}`);
  console.log(`Input: ${input}`);
  console.log(`Expected: ${output}}`);
  console.log(`Result: ${res}}`);
  console.log("+-+-+-+-+-+-+-+-+-+-+-");
});

console.log("-----");
