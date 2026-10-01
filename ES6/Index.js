// // // // Normal function

// // // function add(a,b){
// // //     return a+ b;
// // // }

// // // const result = add( 10, 20)

// // // console.log(result);

// // // // Arrow function

// // // const add = ( a,b) => {
// // //     return a+ b;
// // // }

// // // const add = (a ,b) => a + b;

// // const multiply = ( a, b) => {
// //     return a*b;
// // }

// // const multiply = (a,b) => a* b;

// // const isEven = (number) => {
// //   if (number % 2 === 0) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };


// // const getSquare = (number) => number  * number;


// // const greet = ( ) => "hello world"


// // const calculate = ( a, b, c) => a + b + c;


// // const checkAge = (age) => age >= 18 ? "Adult" : "Minor" ;



// // const getFullName = ( firstName, lastName) => `${firstName} ${lastName}` ;

// // const numbers = [ 2, 4, 6, 8];

// // const double = numbers.map(number => number * 2);

// // console.log(double);

// // const numbers = [5, 10, 15, 20, 25];

// // const result = numbers.filter(numbers => numbers > 15);


// // console.log(result);


// //=====================Template Literals======================

// // const product = "Laptop";
// // const price = 75000;

// // const message = `The product is ${product} and its price is ${price} BDT.`;

// // console.log(message);



// // const product = "Phone";
// // const price = 20000;
// // const quantity = 3;


// // const message = `You bought ${quantity + product}. Total price: ${price} BDT.`;

// // console.log(message);


// // const name = "Rahim";
// // const age = 25;
// // const profession = "Web Developer";

// // const message = ` Name: ${name}.
// // Age: ${age}.
// // profession: ${profession}.

// // `;

// // console.log(message);



// // function test(strings, value) {
// //     console.log(strings);
// //     console.log(value);
// // }

// // const price = 500;

// // test`Product price: ${price} BDT`;

// // ====================Default Parameters===================


// // const field = "email";
// // const value = "rahim@example.com";

// // const profile = {
// //     [field] : `${value}`,
    
// // }

// // console.log(profile);


// //=====================Rest Parameters===========================


// const sum = (...numbers) =>{

//     let total  = 0;

//     for(let number of numbers){
//         total += number;
//     }
  

//     return total;
// }

// console.log(sum(10, 20, 30));       // 60
// console.log(sum(5, 10, 15, 20));    // 50
// console.log(sum(1, 2, 3, 4, 5, 6)); // 21



const studentAverage = (name, ...marks) => {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    const average = total / marks.length;

    return `${name}'s average marks: ${average}`;
};

console.log(studentAverage("Rahim"));

