// Problem 1: Reverse a String

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
// console.log(reverseStr("hello"));

// Problem 2: Count Vowels in a String
function vowerCount(str) {
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count += 1;
    }
  }
  return "In string " + count + " vowel";
}
// console.log(vowerCount("programming"));

// Problem 3: Check for Palindrome
function checkPalindrome(str) {
  const lowerStr = str.toLowerCase();
  let reverseStr = "";
  for (let i = lowerStr.length - 1; i >= 0; i--) {
    reverseStr += lowerStr[i];
  }
  if (reverseStr === lowerStr) {
    return true;
  } else {
    return false;
  }
}
// console.log(checkPalindrome("hello"));
// Problem 4: Find the Maximum Number

function maxNumFromArray(arr) {
  let max = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (max < arr[i]) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

// Problem 5: Remove Duplicates from an Array

function removeDuplicate(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
// console.log(removeDuplicate( [1,4, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array

function sumOfArray(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num;
}
// console.log(sumOfArray([2, 2, 2, 2]));

// Problem 7: Find Even Numbers in an Array
function findEven(arr) {
  let evenArr = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
    i++;
  }
  return evenArr;
}

// console.log(findEven([1, 2, 3, 4, 5, 6]));
// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result.push(capitalized);
  }
  return result.join(" ");
}
// console.log(capitalizeWords("hello worlds"));

// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = result * i;
    i++;
  }
  return result
}
// console.log(factorial(5));

// Problem 10: PingPong Challenge

function pingPongChallenge() {
  for (let i = 0; i <= 20; i++) {
    if (i % 5 === 0) {
      console.log("Pong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else {
      console.log(i);
    }
  }
}
// pingPongChallenge();
