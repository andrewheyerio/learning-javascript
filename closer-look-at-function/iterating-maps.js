`use strict`;

// When creating maps from scratch, this method is cleaning. However if you programmatically are adding elements then
// the set method is better
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'Try Again!']
]);

// Notice that this structure, array of arrays looks similar to logging and object which is an array of arrays.
console.log(question);

// This means there is an easy way of converting objects to maps, for example...
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(Object.entries(openingHours))
console.log(hoursMap);

// Maps are iterables and therefor have for loops available to them - objects are not
console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

// Again, using the power of booleans
console.log(question.get(answer === question.get('Correct')));

// We can also convert maps into an array
console.log([...question])