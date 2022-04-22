'use strict';

// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = prine || 199;
//
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//
//     console.log(booking);
//     bookings.push(booking);
// }
//
// createBooking('LH123')
// createBooking('LH123', 2, 800)
// createBooking('LH123', 5)


// Passing argument value vs reference

// const flight = 'LH234'
// const jonas = {
//     name: 'Andrew Heyer',
//     passport: 837283729,
// }
//
// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name
//
//     if(passenger.passport === 837283729) {
//         alert('Check in')
//     } else {
//         alert('Wrong passport!')
//     }
// }
//
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
//
// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000000)
// }
// newPassport(jonas);
// checkIn(flight, jonas);


// Javascript has first class functions
// meaning functions are values,
// Java script also has higher order function
// This is a function that recieved another function as an argument
// that returns a new functions or both

// const greet = () => console.log('Hoooowww do ya do');
// btnClose.addEventListener('click', greet);
// //         ^- Higher Order function  ^- Callback function
//
// function count() { // <- Higher Order function
//     let counter = 0;
//     return function() { // <- Returned function
//         counter++;
//     };
// }


// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase()
// };
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function(str, fn) { // Takes in function therefore higher order fn
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best!', upperFirstWord);
// transformer('JavaSctipt is the best!', oneWord);


// This feature of JS is neat because we can add callback functions to the body of a document
// so that we can add interactive components. JS uses callbacks all the time
// const high5 = function() {
//     console.log('highfive');
// }
// document.body.addEventListener('click', high5);
// ['andrew', 'eric', 'belen'].forEach(high5);


// 132. FUNCTION RETURNING FUNCTIONS
// Functions have the ability to return functions.
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
// This feature is demonstrated here where by initializing a function can
// determine how that function behaves by another call.
const greeterHey = greet('Hey');
greeterHey("Andrew");
greeterHey("Eric");
greet('Hello')
// Arrow functions can be chained in a row to product the following effects.
// Here we are converting the traditional greeterHey into only arrow functions
// Just an excercise to see how it can be done.
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`)
const greeterHey2 = greet2('Holi')
greeterHey2("Sarah")
greeterHey2("Belen")


// 133. CALL AND APPLY METHODS
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};
lufthansa.book(239, 'Andrew Heyer');
lufthansa.book(639, 'Eric Coughlin');
console.log(lufthansa)
// At this point we have a simple function inside an object that will add bookings into an array.
// Imagine now if we wanted to creat a new airline that had the same booking function. We can copy
// and paste the code from the first airline... OR (just for sake of learning this not necessarily
// the best thing to always do) we can use the bind keyword. We need to bind to steal functions from
// other objects so that the 'this' keyword also follows.
const book = lufthansa.book;
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
book.call(eurowings,23, 'Taco Man'); // Call the book method, with the this kw set to eurowings object
console.log(eurowings)
// Another method for accomplishing the above is by using the Apply method
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss)
// However using apply is not used anymore. The reason for that is because of moder JS
book.call(swiss, ...flightData)


// 134. BIND METHOD
// Now, all of these are eclipsed by a bind method. This allows us to create booking functions
// for each of the parent objects
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23,'Steven Williams');
// Bind allows us to set in stone certain functions further simplifying our methods
// This is called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Andrew Heyer')
bookEW23('Martha Cooper');
// We can use the bind with Event Listeners to create interesting things
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this)
    this.planes++;
    console.log(this.planes)
};
// The bind method is necessary here so that the 'this' key within the buyPlane function points to
// the proper object.
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application is a common use case of Bind, not necesarily for the this keyworkd
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Small quiz - turn the add tax function above into a returning function
const addVAT2 = function(tax) {
    return function(cost) {
        return cost + (cost * tax)
    }
}
const vat2 = addVAT2(.23)
console.log(vat2(100))
console.log(vat2(23))