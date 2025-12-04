const web = new Set(['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'])

// we cant add duplicates
web.add('JavaScript');

console.log(web.size);
console.log(web);

// check if an element is in the set
console.log(web.has('JavaScript'));


// create new sets
const backend = new Set(['Node.js', 'Python', 'Java', 'C#'])
const compiled = new Set(['C#', 'Java', 'C++', 'Go'])

console.log(web.union(backend));

// check an element is in both sets
console.log(web.intersection(backend));

// diference between sets
console.log(web.difference(backend));

// all elements in one set but not in the other
console.log(web.symmetricDifference(backend));


const begginer = new Set(['HTML', 'CSS'])

console.log(begginer.isSubsetOf(web));
console.log(web.isSupersetOf(begginer));

// check if two sets are disjoints
console.log(web.isDisjointFrom(compiled));
console.log(web.isDisjointFrom(backend));