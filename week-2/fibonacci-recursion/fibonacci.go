package main
import(
	"fmt"
)

func main(){
	var num int
	fmt.Println("Enter number ")
	fmt.Scan(&num)
	fmt.Println(fib(num))
}

func fib(n int)int{
	if n <= 1{
		return n
	}
	return fib(n-1) + fib(n-2)
}
