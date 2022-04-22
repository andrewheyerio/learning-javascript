// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648683#notes
// A close is the closed-over variable environment of the execution context in which a function was created, ever after
// that execution context is gone;

`use strict`

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();
// notice that the passengerCOunt is incrementing even though it is a declared via let. How is it that each consecutive
// call to booker is able to access passengerCount? passengerCount shouldn't even be able to be accessed by the
console.dir(booker) // this can show us the closures that are withing the console

let f;

const g = function() {
    const a = 23;
    f= function () {
        console.log( a * 2 );
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log( b * 2);
    };
}

g();
f();

// Re-assigning f function
h();
f();

// Example 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){},1000)

    console.log(`Will start boarding in ${wait}`)
}
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648697#notes