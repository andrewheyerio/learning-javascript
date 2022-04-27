`use strict`
// The new at method allows us to access an element in an array in a modern way
const arr = [23,11, 64];
console.log(arr[0])
console.log(arr.at(0));
// But what's the big deal here?

// Suppose we did not know the length and we want to get the last element in the array we can do this.
arr[arr.length -1];
arr.slice(-1)[0];

// here is the moder way of doing it
arr.at(-1);