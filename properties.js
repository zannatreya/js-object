// properties.js

const bottle = {
    color: 'Yellow',
    price: 50,
    hold: 'water',
    isCleaned: true
};
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pairs = Object.entries(bottle);

// console.log(keys);
// console.log(values);
// console.log(pairs);
bottle.height = 100;
const freeze = Object.freeze(bottle);
bottle.price = 100;
bottle.weight = 40;
const seal = Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);