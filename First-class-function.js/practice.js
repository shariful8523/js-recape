

// function great() {
//     console.log("Hello shariful");
// }

// function executeFunction(fn){
   
//    fn();


// }

// let result = executeFunction(great);

// console.log(result);


// add function-কে calculate()-এর argument হিসেবে পাঠাবে।
// calculate() এর ভিতরে operation ব্যবহার করে দুইটি number-এর যোগফল বের করবে।

function add(a,b){
    return a + b;
}

function calculate(a,b, operation){
    return operation(a,b)
}

const result = calculate(10,20,add)

console.log(result);