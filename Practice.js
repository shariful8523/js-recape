

// problem 1

// create a user profile function, which takes 2 argument and 1 optional 
// with default value, name, age, and city(optional).


// function userprofile(name, age, city = " Dhaka"){

//     let obj ={
//         name,
//         age,
//         city,
//     }

//     return obj;
// };

// console.log(userprofile("shariful", 22, " Rangpur"));


// problem 2


// Akti bill calculator create korte have jekane user tar dishes er price add korbe 
// as a argument, and amder return korte have total cost.


function billCalculator(...rest){

    let sum = 0;
       
      for (let i = 0; i < rest.length; i++){
          sum = sum + rest[i];
      }

      return sum;
};

let result = billCalculator(100,599,200,503,200);

console.log(result);