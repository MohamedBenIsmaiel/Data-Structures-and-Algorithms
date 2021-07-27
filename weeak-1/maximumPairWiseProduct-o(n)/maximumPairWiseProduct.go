package main
import(
	"fmt"
	"bufio"
	"strings"
	"strconv"
	"os"
)

func main(){
	var arr []int
	fmt.Println("Enter you arr");
	scan := bufio.NewScanner(os.Stdin)
	scan.Scan()
	text := scan.Text()
	textArr := strings.Fields(text)
	for _, value := range textArr{
		val, _ := strconv.Atoi(value)
		arr = append(arr,val)
	}
	fmt.Println(arr)
	fmt.Println(maxProduct(arr))
}

func maxProduct(arr []int) int{
	max1 := -1
	max2 := -1

	for i:=0; i<len(arr); i++{
		if arr[i] > max1{
			max1 = arr[i]
		}
	}

	for j:=0; j<len(arr); j++{
		if arr[j] > max2 && arr[j] != max1{
			max2 = arr[j]
		}
	}
	return max1 * max2;
}
