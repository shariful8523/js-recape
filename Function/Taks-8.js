
// Problem 8 — Calculate Remaining Money 💰


function calculateRemainingMoney(money, expense) {

    const totalMoney = money - expense;


    return totalMoney;

}



const remaining = calculateRemainingMoney(5000, 1750);

console.log(remaining);