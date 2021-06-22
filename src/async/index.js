const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(()=> resolve('Do something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}



const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch {
        console.error(error);
    }
}

console.log('Before');
anotherFunction();
console.log('After');