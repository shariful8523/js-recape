


// create a user profile function, which takes 2 argument and 1 optional 
// with default value, name, age, and city(optional).


function userprofile(name, age, city = " Dhaka"){

    let obj ={
        name,
        age,
        city,
    }

    return obj;
};

console.log(userprofile("shariful", 22, " Rangpur"));