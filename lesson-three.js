// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution - ES5 arguments and for loop
// function addAll() {
//     var arguments = Array.prototype.slice.call(arguments);
//     var total = 0;

//     for (let i = 0; i < arguments.length; i++) {
//        total += arguments[i];
//     }

//     return total;
// }

// Solution 2 - ES6 & ForEach
// function addAll(...numbers) {
//     let total = 0;

//     numbers.forEach((number) => {
//         total += number;
//     })

//     return total;
// }

// Solution 3 - ES6 & reduce
function addAll(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    // takes in accumulator and current value
    // loops through the current value
    // arrow function -- take the accumulator (starts at 0) and for each iteration , add the current value
}

console.log(addAll(2, 5, 6, 8, 10, 29, 53));

// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(number) {
    let total = 0;

    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= number; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(100));

// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1 - Filter
// function seekAndDestroy(arrays) {
//     const argument = Array.from(arguments);
    
//     function filterArray(arrays) {
//         // return true if not in an array
//         return argument.indexOf(arrays) === -1;
//     }

//     return arrays.filter(filterArray);
// }

// Solution 2 - ...rest
function seekAndDestroy(array, ...rest) {
    return array.filter(value => !rest.includes(value));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {
    const array1 = [];
    const array3 = [];

    a.forEach((value, i) => (value === -1 ? array1.push(i) : array3.push(value)));

    const sortArray = array3.sort((a, b) => a - b);

    array1.forEach((value, i) => sortArray.splice(array1[i], 0, -1));

    return sortArray;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]);
// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(string) {
    let compare = string.charCodeAt(0);
    let missing;

    string.split("").map((char, i) => {
        if (string.charCodeAt(i) == compare) {
            ++compare;

        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}

console.log(missingLetters("abcdefghjklmno"));

// ---------------------------------------------------------------------------------------------------------

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(array) {
    let evenSum = 0;
    let oddSum = 0;

    array.forEach(number => (number % 2 === 0 ? (evenSum += number) : (oddSum += number)));

    return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));