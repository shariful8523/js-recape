// // // // function twoSum(nums, target) {
// // // //   for (let i = 0; i < nums.length; i++) {
// // // //     for (let j = i + 1; j < nums.length; j++) {

// // // //       if (nums[i] + nums[j] === target) {
// // // //         return [i, j];
// // // //       }

// // // //     }
// // // //   }
// // // // }

// // // // console.log(twoSum([2, 7, 11, 15], 9));
// // // // // Output: [0, 1]

// // // // console.log(twoSum([3, 2, 4], 6));
// // // // // Output: [1, 2]

// // // // console.log(twoSum([3, 3], 6));
// // // // // Output: [0, 1]

// // // function findMax(numbers) {

// // //    let max = numbers[0];

// // //    for(let i = 0; i < numbers.length; i++){

// // //     if (numbers[i] > max){
// // //         max = numbers[i];
// // //     }

// // //    }

// // //    return max;

// // // }

// // // console.log(findMax([12, 5, 27, 9, 18]));
// // // // Expected output: 27

// // // console.log(findMax([3, 45, 11, 8]));
// // // // Expected output: 45

// // // console.log(findMax([-5, -2, -10, -1]));
// // // // Expected output: -1

// // function findSecondLargest(numbers) {

// //   let max = numbers[0];
// //   let secondMax = numbers[0];

// //   for ( let i = 0; i < numbers.length; i++){

// //     if (numbers[i] > max){
// //         max = numbers[i];
// //     } else if ( numbers[i] > max ) {
// //        secondMax = max[i];
// //     }

// //   }

// //   return max, secondMax;

// // }

// // console.log(findSecondLargest([12, 5, 27, 9, 18]));
// // // Expected output: 18

// // console.log(findSecondLargest([3, 45, 11, 8]));
// // // Expected output: 11

// // console.log(findSecondLargest([10, 20, 30, 40]));
// // // Expected output: 30

// // Best Time to Buy and Sell Stock

// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1 ; i < prices.length; i++){
//     if(prices[i] < minPrice){
//       minPrice = prices[i];
//     }

//     const profit = prices[i] - minPrice;

//     if(profit > maxProfit){
//       maxProfit = profit;
//     }

//   }

//   return maxProfit;

// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
// console.log(maxProfit([2, 4, 1]));          // 2
// console.log(maxProfit([3, 3, 3, 3]));       // 0

// Contains Duplicate

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 2, 3])); // true
console.log(containsDuplicate([5])); // false
