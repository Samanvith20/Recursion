// factorial of 4! is 4*3*2*1 = 24

// Iterative approach to calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

 const result=factorial(4); // Example usage: 4! = 24
console.log(result); // Output: 24


// Recursive approach to calculate factorial
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

factorialRecursive(4); // Example usage: 4! = 24
const resultRecursive = factorialRecursive(4);
console.log(resultRecursive); // Output: 24