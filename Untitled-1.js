/*
const double = (a, logger) => {
    const doubleOfA = a * 2;
    logger(a, doubleOfA); // console.log function accepts as many parameters as we want.
}

double(3, (input, result) => console.log(`The double of ${input} is ${result}`));
*/
/*
const multiply = (a, b, logger) => {
    const answer = a * b;
    logger(a, b, answer);
}
multiply(3, 4, (answer) => console.log(`The result of multiplying ${3} and ${4} is ${answer}`));



function multiply (){
    const answer = 3 * 4;
    return logger(answer);
}

function logger(x){
console.log(x);
}

multiply()
*/




function multiply (a,b){
    const answer = a * b;
    return logger(answer);
}
function logger(x){
console.log(x);
}
multiply(3,4);






function multiply (pizzaToBeMade, a, b){
    return pizzaToBeMade(a,b)
 }
 
 multiply((a,b) =>{return a, b}, 1, 2);