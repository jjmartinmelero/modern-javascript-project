
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(true);
// const promise3 = Promise.resolve('foo');
const promise3 = Promise.reject(new Error('Error'));

Promise.allSettled([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    });



const promise4 = new Promise(
    (resolve, reject) => setTimeout(() => reject('promise4 rejected'), 100)
);

const promise5 = new Promise(
    (resolve, reject) => setTimeout(() => resolve('promise5 resolved'), 100)
);

const promise6 = new Promise(
    (resolve, reject) => setTimeout(() => resolve('promise6 resolved'), 200)
);

// get the first promise that is resolved
Promise.any([promise4, promise5, promise6])
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    });


// example with fetch
// we use the first resolved promise to performance user experience
// const fetch1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
// const fetch2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
// const fetch3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

// Promise.any([fetch1, fetch2, fetch3])
//     .then((values) => {
//         console.log(values);
//     });
