function sayHello(name) {
    console.log(`Hello, ${ name }!`);
}

function sayGoodbye(name) {
    console.log(`Goodbye, ${ name }!`);
}

function apologize() {
    console.log("I'm sorry!");
}

// the `loggingFunction` is our callback function.
function greeter(loggingFuntion) {
    const names = ["John", "Sarah", "Peter", "Laura"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    loggingFuntion(randomName);
}

// in this context, `sayHello` is a callback function, because `greeter` will "call it back when it's finished".
greeter(sayHello);

setTimeout(apologize, 1000);
