/* Print the character which is repeated max no of times
input: 'hello world'
output : 'L'*/
// Input string
let str = 'hello world';

function mostRepeatedChar(str) {
    //Initialize an empty object to store character counts
    let charCount = {};

    //Iterate through the string
    for (let i = 0; i < str.length; i++) {
        // Get the current character (convert to lowercase for case insensitivity)
        let char = str.charAt(i).toLowerCase();

        // Step 3: Update the character count
        if (charCount[char]) {
            charCount[char]++; // Increment count if character exists
        } else {
            charCount[char] = 1; // Add character with count 1 if it doesn't exist
        }
    }

    // Step 4: Find the most repeated character
    let maxChar = '';
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    // Step 5: Return the result
    return maxChar;
}


// Call the function and print the result
console.log(mostRepeatedChar(str));