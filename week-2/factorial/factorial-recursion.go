package main
import(
	"fmt"
)

func main(){
	var number int
	fmt.Println("Enter number ")
	fmt.Scan(&number)
	fmt.Println(factorial(number))
}

func factorial(num int) int{
	if num == 1{
		return num
	}
	return num * factorial(num- 1)
}
