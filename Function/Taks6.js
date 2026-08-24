
// Problem 6 — Salary Calculator 💰


function calculateSalary(basicsalary, bonusPercent) {

     const bonus = (basicsalary * bonusPercent) / 100;
     const finalSalary = basicsalary + bonus;

     return finalSalary;
}


const finalSalary = calculateSalary(30000, 10);

console.log(finalSalary);