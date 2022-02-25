const bottle = {
    color: 'Yellow',
    price: 50,
    hold: 'water',
    isCleaned: true
};

for (const prop in bottle) {
    console.log(prop, bottle[prop])
}
const keys = Object.keys(bottle);
for (const prop of keys) {
    console.log(prop, bottle[prop])
}