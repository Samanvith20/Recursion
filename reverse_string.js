
// "Hello"--> "olleH"
function reverseString(str) {
    return str.split('').reverse().join('');
    }

// another way to do it
function reverseString(str) {   
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// in recursive way
function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } 
    return reverseStringRecursive(str.slice(1)) + str[0];

}

// Example usage:
const inputString = "Hello";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "olleH"
// Example usage for recursive function:
const inputStringRecursive = "Hello";
const reversedStringRecursive = reverseStringRecursive(inputStringRecursive);
console.log(reversedStringRecursive); // Output: "olleH"