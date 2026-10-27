

// // // create a object 

// // // const user ={
// // //     name : "shariful",
// // //     age : 20,
// // //     isSingle : true,
      
// // // }


// // // create a class 

// // class person {
// //     first_name='shariful'
// //     last_name='islam'

// //     //method

// //     getName(){
// //         return (`The name of the person is ${this.first_name} ${this.last_name}`)
// //     }
// // }

// // const person1 = new person();
// // console.log(person1.getName());



// //  constructor parameter

// class person {

//     constructor(num1,num2){
//         let sum = num1 + num2;

//         console.log(sum);

//     }
// }


// const person1 = new person(10,20); 

// Inheritance

class Father {

    name ="shariful"
    age = 22

    getName(){
        return (`My Father name is ${this.name}. my Father age is ${this.age}`)
    }

}

class soon extends Father{

}

let newobj = new soon();

console.log(newobj);

