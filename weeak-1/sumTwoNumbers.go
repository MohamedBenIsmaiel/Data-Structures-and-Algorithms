package main
import(
	"fmt"
	 "bufio"
	 "os"
	 "strconv"
	 "strings"
)

func main(){
	scan := bufio.NewScanner(os.Stdin)
	scan.Scan()
	text := string(scan.Text())
	numbers := strings.Split(text," ")
	num1, _ := strconv.Atoi(numbers[0])
	num2, _ := strconv.Atoi(numbers[1])
	sum := num1+num2
	fmt.Println(sum)
}

