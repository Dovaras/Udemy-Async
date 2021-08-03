/*
const double = (a, logger) => {
    const doubleOfA = a * 2;
    logger(a, doubleOfA);
}

double(3, (input, result) => {
    console.log(`The double of ${input} is ${result}`);
});
*/
const multiply = (a, b, logger) => {
    ab = a * b;
    logger(a, b, ab);
}
const logger = (a, b, ab) => console.log(`The result of multiplying ${a} and ${b} is ${ab}`);

let ab = 0;

multiply(3, 4);

///////////////////////////////////////

// Your task is to program the function `multiply` so it can accept a logger which takes three arguments.
/*

const logger = (a, b, ab) => console.log(`The result of multiplying ${a} and ${b} is ${ab}`);
multiply(a, b);
*/
//const logger = (a, b, ab) => alert(`The result is ${ab}`);

// This is what your logger should say when you call `multiply(3,4);`.
"The result of multiplying 3 and 4 is 12";

// Your logger must be a function which accepts three arguments. For example, using the `alert()` method
//   we would have something like `const logger = (a, b, ab) => alert(`The result of multiplying ${a} and ${b} is ${ab}`);`
// We could also ignore some parameters, and say directly `const logger = (a, b, ab) => alert(`The result is ${ab}`);`
