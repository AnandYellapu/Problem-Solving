//1.Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

function generateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}

const n = 8;
console.log(generateFibonacciSequence(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]



//2.Write a function that takes a number as input and returns the factorial of that number.
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


const number = 5;
console.log(calculateFactorial(number)); // Output: 120


//3.Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


const word = "radar";
console.log(isPalindrome(word)); // Output: true


//4.Write a function that finds the maximum and minimum elements in an array.

function findMaxMin(array) {
    if (array.length === 0) {
        return { max: undefined, min: undefined };
    }
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return { max, min };
}

const numbers = [3, 7, 2, 9, 5];
console.log(findMaxMin(numbers)); // Output: { max: 9, min: 2 }


//5.Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
