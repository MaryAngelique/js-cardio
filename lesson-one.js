// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // return str.split("").reverse().join("");

    // --------------------------------------------------------

    // For Loop
    // let revString = "";
    // for( let i = str.length - 1; i >= 0; i--) {
    //     revString = str[i] + revString;

    //     console.log(i);
    // }

    // return revString

    // --------------------------------------------------------

    // For Of
    // let revString = "";
    // for( let char of str ) {
    //     revString = char + revString;
    // }

    // return revString;

    // --------------------------------------------------------

    // For Each
    // let strRev = "";
    // str.split("").forEach(char => {
    //     strRev = char + strRev
    // });

    // --------------------------------------------------------

    // Reduce
    return str.split("").reduce((revString, char) => char + revString, "");
  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
    const strRev = str.split("").reverse().join("");

    return strRev === str;
  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
    const strRev = int.toString().split("").reverse().join("");

    return parseInt(strRev);
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    //  For Loop
    // const strArr = str.toLowerCase().split(" ");

    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(" ");

    // --------------------------------------------------------

    // Map
    // return str.toLowerCase().split(" ").map(function(word) {
    //     return word[0].toUpperCase() + word.substr(1);
    // }).join(" ");

    // --------------------------------------------------------

    // Replace & Regex
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    }); 
    // g - global 
    // i - case sensitive
  }
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
    const chars = {};
    let max = 0;
    let maxChar = "";

    str.split("").forEach(function(char) {

        if (chars[char]) {
            chars[char]++;

        } else {
            chars[char] = 1;
        }
    });

    for(let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0){
            console.log("Buzz");

        } else {
            console.log(i);
        }
    }
  }
  
  
  
  // Call Function
//   const output = reverseString('hello');
//   const output = isPalindrome('racecar');
//   const output = reverseInt('125');
//   const output = capitalizeLetters('I Love JavaScript');
//   const output = maxCharacter('javascript');
const output = fizzBuzz();

  
  console.log(output);
  