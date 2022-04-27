// The for each is different than the for of loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// This is the for of way of looping
for (const movement of movements) {
    if (movement > 0 ) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
}

// Here we do it using forEach, note that forEach is a higher order function. Notice that we are passing in a callback
// function
console.log(`------ FOREACH ------`)
movements.forEach(function(movement, i, arr) {
    if (movement > 0 ) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`)
    }
})

// But what if we need to access the index number? Well, remember that in order to do that in the for each loop we can
// do that by looping over movements.entries(). Remember that entries returns an array of the index and the value. so
// you must do it as such
// for (cont [i, movement] of movements.entries())

// To do this all we need to do is pass in 2 other arguments. Notice that it is the order that matters not the names.

// * We cannot break out of a foreach loop. So if you need to break out then use the for of loop.