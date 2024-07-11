// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1 || num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  }
  let word = "";
  for (i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  return word;
  //   return array.reduce((a, b) => (a.length < b.length ? b : a), "");
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  if (numArr.length === 0) {
    return 0;
  }
  let numRe = 0;
  numArr.forEach((num) => (numRe += num));
  return numRe;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  if (numArr.length === 0) {
    return 0;
  }
  let numRe = 0;
  numArr.forEach((num) => (numRe += num));
  return numRe / numArr.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  return arr.includes(word);
}
