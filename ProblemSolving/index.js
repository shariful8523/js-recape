// // // // // // // // function twoSum(nums, target) {
// // // // // // // //   for (let i = 0; i < nums.length; i++) {
// // // // // // // //     for (let j = i + 1; j < nums.length; j++) {

// // // // // // // //       if (nums[i] + nums[j] === target) {
// // // // // // // //         return [i, j];
// // // // // // // //       }

// // // // // // // //     }
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // console.log(twoSum([2, 7, 11, 15], 9));
// // // // // // // // // Output: [0, 1]

// // // // // // // // console.log(twoSum([3, 2, 4], 6));
// // // // // // // // // Output: [1, 2]

// // // // // // // // console.log(twoSum([3, 3], 6));
// // // // // // // // // Output: [0, 1]

// // // // // // // function findMax(numbers) {

// // // // // // //    let max = numbers[0];

// // // // // // //    for(let i = 0; i < numbers.length; i++){

// // // // // // //     if (numbers[i] > max){
// // // // // // //         max = numbers[i];
// // // // // // //     }

// // // // // // //    }

// // // // // // //    return max;

// // // // // // // }

// // // // // // // console.log(findMax([12, 5, 27, 9, 18]));
// // // // // // // // Expected output: 27

// // // // // // // console.log(findMax([3, 45, 11, 8]));
// // // // // // // // Expected output: 45

// // // // // // // console.log(findMax([-5, -2, -10, -1]));
// // // // // // // // Expected output: -1

// // // // // // function findSecondLargest(numbers) {

// // // // // //   let max = numbers[0];
// // // // // //   let secondMax = numbers[0];

// // // // // //   for ( let i = 0; i < numbers.length; i++){

// // // // // //     if (numbers[i] > max){
// // // // // //         max = numbers[i];
// // // // // //     } else if ( numbers[i] > max ) {
// // // // // //        secondMax = max[i];
// // // // // //     }

// // // // // //   }

// // // // // //   return max, secondMax;

// // // // // // }

// // // // // // console.log(findSecondLargest([12, 5, 27, 9, 18]));
// // // // // // // Expected output: 18

// // // // // // console.log(findSecondLargest([3, 45, 11, 8]));
// // // // // // // Expected output: 11

// // // // // // console.log(findSecondLargest([10, 20, 30, 40]));
// // // // // // // Expected output: 30

// // // // // // Best Time to Buy and Sell Stock

// // // // // function maxProfit(prices) {
// // // // //   let minPrice = prices[0];
// // // // //   let maxProfit = 0;

// // // // //   for (let i = 1 ; i < prices.length; i++){
// // // // //     if(prices[i] < minPrice){
// // // // //       minPrice = prices[i];
// // // // //     }

// // // // //     const profit = prices[i] - minPrice;

// // // // //     if(profit > maxProfit){
// // // // //       maxProfit = profit;
// // // // //     }

// // // // //   }

// // // // //   return maxProfit;

// // // // // }

// // // // // console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// // // // // console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
// // // // // console.log(maxProfit([2, 4, 1]));          // 2
// // // // // console.log(maxProfit([3, 3, 3, 3]));       // 0

// // // // // Contains Duplicate

// // // // // function containsDuplicate(nums) {
// // // // //   for (let i = 0; i < nums.length; i++) {
// // // // //     for (let j = i + 1; j < nums.length; j++) {
// // // // //       if (nums[i] === nums[j]) {
// // // // //         return true;
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   return false;
// // // // // }

// // // // // console.log(containsDuplicate([1, 2, 3, 1])); // true
// // // // // console.log(containsDuplicate([1, 2, 3, 4])); // false
// // // // // console.log(containsDuplicate([1, 1, 2, 3])); // true
// // // // // console.log(containsDuplicate([5])); // false

// // // // // function containsDuplicate(nums) {
// // // // //   const seen = [];

// // // // //   for (let i = 0; i < nums.length; i++) {
// // // // //     const currentNumber = nums[i];

// // // // //     if (seen.includes(currentNumber)) {
// // // // //       return true;
// // // // //     }

// // // // //     seen.push(currentNumber);
// // // // //   }

// // // // //   return false;
// // // // // }

// // // // // console.log(containsDuplicate([1, 1, 2, 3])); // true

// // // // function getSum(nums) {
// // // //   let sum = 0;

// // // //   for (let i = 0; i < nums.length; i++) {

// // // //     const currentNumber = nums[i];

// // // //     sum = sum + currentNumber;

// // // //   }

// // // //   return sum;
// // // // }

// // // // console.log(getSum([3,5,2,4]));

// // // function countEvenNumbers(numbers) {
// // //   let count = 0;

// // //   for (let i = 0; i < numbers.length; i++) {
// // //     const currentNumber = numbers[i];

// // //     if (currentNumber % 2 === 0) {
// // //       count = count + 1;
// // //     }
// // //   }
// // //   return count;
// // // }

// // // let result = countEvenNumbers([5, 2, 8, 3]);

// // // console.log(result);



// // // Count Positive Numbers

// // function countNegativeNumbers(numbers){

// //   let count = 0;

// //   for(let i = 0; i < numbers.length; i++){

// //     let currentNumber = numbers[i];

// //     if(currentNumber < 0 ){

// //         count = count + 1;
// //     }

// //   }
// // return count;

// // }

// // let result = countNegativeNumbers([4, -3, 0, -8, 7, -1]);

// // console.log(result);



// // যে Product-এর stock 5 বা তার কম, সেটি Low Stock হিসেবে গণ্য হবে।

// // const products = [
// //   { name: "Mouse", stock: 15 },
// //   { name: "Keyboard", stock: 3 },
// //   { name: "Monitor", stock: 8 },
// //   { name: "USB Cable", stock: 2 },
// //   { name: "Laptop", stock: 12 }
// // ];


// function lowStockAlert(products){

//   for(let i = 0; i < products.length; i++){

//     let currentStock = products[i].stock;

//     if(currentStock <= 5){
//         console.log(products[i].name, " Low stock");
//     } else{
        
//     }
//   }

//    return;
// }

// let result = lowStockAlert([
//   { name: "Mouse", stock: 15 },
//   { name: "Keyboard", stock: 3 },
//   { name: "Monitor", stock: 8 },
//   { name: "USB Cable", stock: 2 },
//   { name: "Laptop", stock: 12 }
// ])

