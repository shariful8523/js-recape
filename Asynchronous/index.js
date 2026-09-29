
// Set time out

// console.log("Hello I am a developer");

// setTimeout( () => {

// console.log("I am a Timer");

// }, 2000);

// console.log("End ");

// Set Interval

// console.log("start");

// setInterval( () => {

//     console.log("Interval is cooking");

// }, 2000);

// console.log("End");



// clearInterval()

// const intervalId = setInterval(() => {
//     console.log("Hello");
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 5000);



// clearTimeout()


// const timeoutId = setTimeout(() => {
//     console.log("Hello");
// }, 5000);

// clearTimeout(timeoutId);


// problem


// const timer = setInterval(() => {
//     console.log("Running...");
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
// }, 3000);


// Event loop


// console.log("A");

// function test() {
//     console.log("B");
// }

// test();

// console.log("C");





// ---------------------- Promise ----------------


// const promise = new Promise((resolve, reject) => {
//     reject("Error");
//     resolve("Success");
// });

// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done");
//     }, 2000);
// });


// console.log("Start");

// const promise = new Promise((resolve, reject) => {
//     console.log("Promise started");

//     resolve("Done");
// });

// console.log("End");


// const promise = new Promise((resolve, reject) => {
//     resolve("Hello");
// });

// promise.then((result) => {
//     console.log(result);
// });


// const promise = new Promise((resolve, reject) => {
//     reject("Failed");
// });

// promise.then((result) => {
//     console.log("Success:", result);
// });

// promise.catch((error) => {
//     console.log("Error:", error);
// });




// const promise = new Promise((resolve, reject) => {
//     reject("Failed");
// });

// promise
//     .then((result) => {
//         console.log("Success");
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Done");
//     });


// Promise.resolve(5)
//     .then((value) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(value * 2);
//             }, 1000);
//         });
//     })
//     .then((value) => {
//         console.log(value);
//     });



// Promise.resolve(10)
//     .then((value) => {
//         throw new Error("Something went wrong");
//     })
//     .then((value) => {
//         console.log("Success");
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });



// Promise.resolve(10)
//     .then((value) => {
//         return value * 2 ;
//     })
//     .then((value) => {
//         return value * 2;
//     })
//     .then((value) => {
//         console.log(value);
//     });


// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B");
// const p3 = Promise.resolve("C");

// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log(results);
//     });


// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("A"), 3000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("B"), 1000);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("C"), 2000);
// });

// Promise.race([p1, p2, p3])
//     .then(result => {
//         console.log(result);
//     });



// const p1 = Promise.reject("A");

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("B"), 3000);
// });

// const p3 = new Promise(resolve => {
//     setTimeout(() => resolve("C"), 1000);
// });

// Promise.any([p1, p2, p3])
//     .then(result => {
//         console.log(result);
//     });


console.log("1");

const promise = new Promise((resolve) => {
    console.log("2");
    resolve("3");
});

promise.then((value) => {
    console.log(value);
});

console.log("4");