const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(word){
	if(word.length == 1){
		return "palindorm"
	}else if(word[0] == word[word.length - 1]){
			word = word.slice(1,word.length -1)
			return isPalindrome(word)
	}else{
			return "not palindorm"
	}

}


rl.question("Enter two numbers ", function(word) {
	console.log(isPalindrome(word))	

});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

