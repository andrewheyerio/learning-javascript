const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// When calling foreach on a map it is similar to array. The first argument is the value, the second is the key and the
// third is the entire map
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Now let's see how to call it with a set. Remember sets only have unique values. It also doesn't have indexes
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`)}
);
// The reason the value and key is the same is to have the same signature and not have differente forEach's.
// Generally just use the _ key which means a throwaway variable when using a forEach on a set.
