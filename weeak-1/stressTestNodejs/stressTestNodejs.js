function main(){
	while(true){
		let len = Math.ceil(Math.random()*10) + 1
		let arr = []
		for(let i=0; i<len; i++){
			arr.push(Math.ceil(Math.random()*10) + 3)
		}
		console.log("Generated array ",arr)
		let test1 = maxPairWiseFast(arr)
		let test2 = maxPairWiseSlow(arr)
		if (test1 != test2){
			console.log("Error:-Not equal test 1", test1, " test2 ",test2)
			break;
		}
		console.log("Ok equal ")
	}


}

main()





function maxPairWiseFast(arr){
	let max1 = -1
	let max2 = -1
	for(let i=0; i<arr.length; i++){
		if ((max1 == -1) || (arr[i] > arr[max1])){
			max1 = i
		}
		console.log("max 1 ",arr[max1])
	}

	for(let j=0; j<arr.length; j++){
		if(max2 == -1 || arr[j] > arr[max2]){
			if(max1 != j){
				max2 = j
			}
		}

		console.log("max 2 ",arr[max2])
	}
	return arr[max1] * arr[max2]
}


function maxPairWiseSlow(arr){
	let sum = 0
	for(let i=0; i<arr.length; i++){
		for(let j=i+1;j<arr.length; j++){
			// console.log("i ",arr[i]," j ",arr[j])
			if( arr[i] * arr[j] > sum ){
				sum = arr[i] * arr[j]
			}
		}
	}
	return sum
}
