// We have a map data structure where the key is an integer which indicates that time in which an event has occured.
// The value is a string that describes the event. A football game is about 90 minutes.

// Task 1: Create an array of 'events' with no duplciates
// Task 2: After the game is finished, it was found that the yellow card from min 64 was unfair - remove it
// Task 3: Compute the average rate at which an event has occured, a game is 90 minutes long
// Task 4: Loop over the events and log each event that has occured

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow Card'],
]);

// 1. Let's first create an array called events. You may be temtpted to do this
// const events = ['Goal', 'Substitution', 'Yellow Card']
// But a much more Javascript way to do this is by using the following
// 1 - Javascript maps have a method called .values() which returns a

console.log([...new Set(gameEvents.values())])

// Task 2
gameEvents.delete(64)

// Task 3
let lastKey = [...new Set(gameEvents.keys())][gameEvents.size-1]
// an even better way of getting the last key...
// lastKet = [...gameEvents.keys()].pop();

console.log( lastKey / gameEvents.size)


// Task 4
// for (const [key, value] of gameEvents) {
//   console.log(key)
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${value}`)
//   } else {
//     console.log(`[SECOND HALF] ${value}`)
//   }
// }

// An even better way of writing this...
// for (const [key, value] of gameEvents) {
//   key <= 45 ? console.log(`[FIRST HALF] ${value}`) : console.log(`[SECOND HALF] ${value}`)
// }

// Even EVEN better...
for (const [ key, value] of gameEvents) {
  let half = key < 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${value}`)
}
