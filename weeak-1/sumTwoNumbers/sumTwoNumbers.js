const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter two numbers ", function(twoNumbers) {
   twoNumbers = twoNumbers.split(" ")
   const num1 = parseInt(twoNumbers[0]) 
   const num2 = parseInt(twoNumbers[1]) 

   const sum = num1+num2
   console.log(`sum of two numbers is ${sum}`)
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

