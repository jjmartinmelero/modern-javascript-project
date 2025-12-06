const symbol = Symbol();

// always will be false
console.log(Symbol() === symbol);

const ACTIONS = {
    INCREMENT: Symbol('increment'),
    DECREMENT: Symbol('decrement')
}

const increment = ACTIONS.INCREMENT;
const decrement = ACTIONS.DECREMENT;

// get description
console.log(ACTIONS.INCREMENT.description);

console.log(increment === ACTIONS.INCREMENT);


// compare 2 symbol with same description
const symbol1 = Symbol('increment');
const symbol2 = Symbol('increment');

console.log(symbol1 === symbol2);
console.log(symbol1.description === symbol2.description);
