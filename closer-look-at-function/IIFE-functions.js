`use strict`
// Immediately invoked function expressions are functions that run once and only once.
// We do not mean something like the following since this can be ran more than once.
const runOnce = function () {
    console.log('This will never run again')
}
runOnce();  // We can run this code by running 'runOnce()' multiple times.
// But what if we had a way of running the function above to run immedietely as it is read and not stored into a variable
// this way it can't be ran by calling it but only by copy and pasting the code snippet iself.
// We can do something such as the following, we add the paranthesis to trick java into thinking it is an expression
(function () { // this is called an IIFE
    consol.log('Thhis will never run again');
})();
(() => console.log('This will also never run agian'))(); // this is also an IIFE
// The reason this was invented is to be able to hide variables making them private to the function.
// The Es6 way of doing this if by doing
{
    const isPrivate = 26;
}

