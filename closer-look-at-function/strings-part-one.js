'use strict'

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// We have multiple ways of getting index's of values
console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('portugal'))

// We can extract substrings - does not mutate string
console.log(airline.slice(4))
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1))
console.log(airline.slice(-2));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1)
    console.log(s)
    if(s === 'B' || s === 'E')
        console.log("you got the middle seat")
    else console.log("You got lucky")
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E')

// Whenever calling a method on a string, JS automatically creates an object based on the
// string. This process is called boxing


// We can also change the cases of a string
console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

// we can use this to fix capitalization in names
const passenger = 'aNdRew';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)

// We can also compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase()


// You can also replace
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'))

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
    console.log('Part of the NEW Airbus family')
}

// Practice excercise
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!')
    }
}
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage(' Socks and camera')
checkBaggage('Got some snacks and a gun for protection')

// PART 3
console.log('a+very+nice+string'.split('+'))

const [firstName, lastName] = 'Andrew Heyer'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = []

    for(const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1))
        // another possible way of doing this is by replacing the first character
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')


// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4323847384758273));

console.log(maskCreditCard(84321432));


// Repeat method
const message2 = 'Bad weather... All Departures Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${}`)
}