

// problem 1

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// problem 2

// for (let i = 1; i <= 20; i++ ){

//    if (i % 2 === 0){
//     console.log(i);
//    }

// }


// problem 3


// for ( let i = 1; i <=20; i++ ){

//     if (i % 2 === 1 ){
//         console.log(i);
//     }
// }


// problem 4

// let sum = 0;


// for ( let i = 1; i <= 10; i++) {


//     sum = sum + i;
// }

// console.log(sum);


// const number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// let count = 0;

// for ( let i = 1; i <= 20; i++){

//     if ( i % 2 === 0){
       
//         count++;
//     }

// }

// console.log(count);


// problem 7

// let count = 0;

// for( let i = 1; i <= 30; i++ ){

//     if( i % 2 === 1){
//         count++;
//     }
// }

// console.log(count);


// problem 8

// let sum = 0;

// for ( let i = 1; i <= 20 ; i++){

//     if ( i % 2 === 0){
//         sum = i + sum;
//     }
// }

// console.log(sum);


// problem 9

const numbers = [12, 45, 7, 89, 34, 67];

let largest = numbers[0];

for ( let i = 1; i < numbers.length; i++){


    if(numbers[i] > largest){
        largest = numbers[i];
    }

}


console.log(largest);
