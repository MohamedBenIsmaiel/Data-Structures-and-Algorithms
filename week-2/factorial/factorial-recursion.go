package main
import(
	"fmt"
)

func main(){
	var number int
	fmt.Println("Enter number ")
	fmt.Scan(&number)
	if number < 1{
		panic("Number should be positive")
	}
	fmt.Println(factorial(number))
}

func factorial(num int) int{
	if num == 1{
		return num
	}
	return num * factorial(num- 1)
}
