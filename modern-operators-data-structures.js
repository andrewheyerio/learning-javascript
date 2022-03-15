`use strict`

// Maps generally more useful than sets
// Data structure used to map values to keys
// Diff between object and maps are that maps can have any type key, objects can only have string type keys

// Easiest way to create a map is to create a new one with the new keyword, then add to it
const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

// The fact that the set method returns the updated map allows us to chain set's together
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// We can have some fun with the boolean key types and do a neat trick
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
// Although clever... it isn't that readable, but it does show the neat tricks that can be done with boolean types

// We can also check if a map contains a certain key
console.log(rest.has('categories'));

// We can delete elements from the map based on the key
// Objects also have a delete method which is not encouraged to use due to its slow speed - it also has a has property
rest.delete(2);
console.log(rest);

// Maps have a size property
console.log(rest.size);

// And a clear method
// console.log(rest.clear())
console.log(rest);

// We can use arrays as map keys too 0.0
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

// Remember, we cannot retrieve the key value this way because this is NOT the same object in the heap
console.log(rest.get([1, 2]));

// This is the proper way
const arr = [2,3];
rest.set(arr, 'this works')
console.log(rest.get(arr))

// This can be useful when working with DOM elements which are nothing more than objects, mouse over the h1 in console
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)