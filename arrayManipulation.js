

/**
 * This function processes an array of numbers.
 * Each even number is squared, and each odd number is tripled.
 * 
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} A new array with processed numbers.
 */
function processArray(arr) {
  // Use the map method to transform each element in the array
  return arr.map(num => {
      // Check if the number is even
      if (num % 2 === 0) {
          // If even, return the square of the number
          return num * num;
      } else {
          // If odd, return the triple of the number
          return num * 3;
      }
  });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];  // Define an example input array
const processedArray = processArray(inputArray);  // Process the array using the processArray function
console.log(processedArray);  // Output the result to the console

// Expected output: [3, 4, 9, 16, 15]


// Importing the processArray function from another file if it exists
try {
    const { processArray } = require('./processArray');
} catch (error) {
    console.error('Could not import processArray function:', error.message);
}

/**
 * Capitalizes the entire string if the number is even.
 * Converts the string to lowercase if the number is odd.
 * 
 * @param {string[]} stringsArray - An array of strings.
 * @param {number[]} numbersArray - An array of numbers processed by processArray.
 * @returns {string[]} The modified array of strings.
 */
function formatArrayStrings(stringsArray, numbersArray) {
    const formattedStrings = [];
    for (let i = 0; i < stringsArray.length; i++) {
        const string = stringsArray[i];
        const number = numbersArray[i];
        if (number % 2 === 0) {
            formattedStrings.push(string.toUpperCase());
        } else {
            formattedStrings.push(string.toLowerCase());
        }
    }
    return formattedStrings;
}

// Example usage:
const strings = ['Hello', 'World', 'OpenAI', 'GPT-3'];
const numbers = [1, 2, 3, 4];
const formattedStrings = formatArrayStrings(strings, processArray(numbers));
console.log(formattedStrings);
