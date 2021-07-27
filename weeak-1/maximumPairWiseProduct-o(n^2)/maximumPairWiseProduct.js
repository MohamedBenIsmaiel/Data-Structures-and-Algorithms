const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Array of integers ", function(arr){
    arr = arr.split(" ")
    arr = arr.map(x => parseInt(x))
    console.log(sumProduct(arr))
})

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function sumProduct(arr){
 let sum = 0;
 for(let i=0; i<arr.length; i++){
	 for(let j=i+1; j<arr.length; j++){
		 if(arr[i] * arr[j] > sum){
			 sum = arr[i] * arr[j]
		 }
	 }
    }
  return sum
}
