console.log('Object.groupBy');

const numbers = [1, 2, 3, 4, 5, 6, 7]


// without groupBy
// let grouped = {
//     impar: [],
//     par: []
// }

// numers.forEach( number => {
//     if(number % 2 === 0){
//         grouped.par.push(number)
//     } else {
//         grouped.impar.push(number)
//     }
// })


const grouped = Object.groupBy(
    numbers,
    number => {
        if (number % 2 === 0) return 'par'
        return 'impar'
    }
)

console.log(grouped);



// example 2 with strings
const wizards = ['Harry', 'Hermione', 'Ron', 'Snbape', 'Dumbledore'];

const groupByFirstLetter = Object.groupBy(
    wizards,
    wizard => wizard[0]
)

console.log(groupByFirstLetter);


// Example 3 with objects array
const avengers = [
    { name: 'Iron Man', powerLevel: 500 },
    { name: 'Hulk', powerLevel: 9000 },
    { name: 'Thor', powerLevel: 4500 },
    { name: 'Captain America', powerLevel: 2000 },
    { name: 'Black Widow', powerLevel: 9999 },
]

const byPowerLevel = Object.groupBy(
    avengers,
    avenger => {
        if (avenger.powerLevel <= 500) return 'alpha'
        if (avenger.powerLevel <= 5000) return 'beta'
        return 'omega'
    }
)

console.log(byPowerLevel);