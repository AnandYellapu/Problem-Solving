// 1.Explain the concept of prime numbers and write a function to check if a given number is prime.


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(7));
console.log(isPrime(12));



// 2.Write a function to find the largest element in an array.


function findLargestElement(arr) {
    
    if (arr.length === 0) {
        return undefined;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const array = [10, 5, 8, 20, 3];
console.log(findLargestElement(array));



// 3.Write a function to find the second largest element in an array.


function findSecondLargestElement(array) {
    if (array.length < 2) {
        return undefined;
    }
    
    let largest = array[0];
    let secondLargest = array[1];
    
    if (largest < secondLargest) {
        [largest, secondLargest] = [secondLargest, largest];
    }
    
    for (let i = 2; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }
    
    return secondLargest;
}

const array = [3, 7, 2, 9, 5];
console.log(findSecondLargestElement(array)); // Output: 7
 



// 4.Write a function to find the nth Fibonacci number using iteration.

function findNthFibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    
    let prev1 = 0;
    let prev2 = 1;
    let currentFib = 0;
    
    for (let i = 2; i <= n; i++) {
        currentFib = prev1 + prev2;
        prev1 = prev2;
        prev2 = currentFib;
    }
    
    return currentFib;
}


const n = 6;
console.log(findNthFibonacci(n));



// 5.Write a function to calculate the factorial of a number using iteration.

function calculateFactorial(n) {
    if (n < 0) {
        return undefined;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

const number = 5;
console.log(calculateFactorial(number));
