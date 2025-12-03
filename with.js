console.log('.with in array');

const fruits = ['fruit1', 'fruit2', 'fruit3']



console.log(fruits);

// this will be change the original array
//fruits[1] = 'newFruit'
//console.log(fruits);

const copy = fruits.with(1, 'newFruit')

// this is a modified copy
console.log(copy);
