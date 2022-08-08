// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    const word = sen.toLowerCase().match(/[a-z0-9]+/g);

    // SOLUTION 1 - Return a single longest word
    // const sorted = word.sort(function(a, b) {
    //     return b.length - a.length;
    // });

    // Arrow Function
    const sorted = word.sort((a, b) => b.length - a.length);

    console.log(sorted);

    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // const longestWord = sorted.filter(function(word) {
    //    return word.length === sorted[0].length;  
    // });

    // Arrow Function
    const longestWord = sorted.filter((word) => word.length === sorted[0].length);
 
    console.log(longestWord);

    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    if (longestWord.length === 1) {
        return longestWord[0];

    } else {
        return longestWord;
    }
  }
  
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {
    // // Init chunked Array
    // const chunkedArr = [];

    // // Set index
    // let i = 0;

    // // While loop -- loop while index is less than the array length
    // while (i < arr.length) {
    //     // Slice out from from the index to the index + chunk length and push on to the chunked array
    //     chunkedArr.push(arr.slice(i, i + len));

    //     // Increment by chunk length
    //     i += len;
    // }

    // return chunkArray;

    // Init chunked arr
    const chunkedArr = [];

    // Loop through arr
    arr.forEach(val => {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];

        // Check if last and if last length is equal to the chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
  }
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {}
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {}
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {}
  
  // Call Function
  const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
  
  console.log(output);
  