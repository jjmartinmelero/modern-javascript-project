function doSomething() {
    if (false) throw new Error('Something went wrong');
    if (false) return Promise.resolve('Something went wrong');
    if (false) return 'sincrono';
}

Promise.try(() => doSomething())
    .then((value) => {
        console.log({ value });
    })
    .catch((error) => {
        console.log(error);
    });