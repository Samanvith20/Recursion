
// [1,2,3,4,5]=>1+2+3+4+5=15


// Itrative approach to sum an array of numbers
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error("Array must contain only numbers");
        }
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
    }
// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result);


// Recursive approach to sum an array of numbers
function sumArrayRecursive(arr) {
 
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArrayRecursive(arr.slice(1));
}
// Example usage:
const numbersRecursive = [1, 2, 3, 4, 5];
const resultRecursive = sumArrayRecursive(numbersRecursive);
console.log(resultRecursive);