const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumProduct(arr){
	let max1 = -1;
	let max2 = -1;

	for(let i=0; i<arr.length;i++){
		if(arr[i] > max1){
			max1 = arr[i]
		}
	}

	for(let j=0; j<arr.length;j++){
		if(arr[j] > max2 && arr[j] != max1){
			max2 = arr[j]
		}
	}
	return max1 * max2
}

rl.question("Enter array of integers ", function(arr) {
	arr = arr.split(" ")
	arr = arr.map(x => parseInt(x))
	console.log(sumProduct(arr))

});


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

