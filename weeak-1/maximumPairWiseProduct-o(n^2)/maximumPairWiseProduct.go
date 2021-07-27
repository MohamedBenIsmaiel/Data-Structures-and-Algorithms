package main
import(
	"fmt"
	"os"
	"bufio"
	"strconv"
	"strings"
)

func main(){
	var arr []int
	scan := bufio.NewScanner(os.Stdin)
	scan.Scan()
	text := scan.Text()
	for _,v := range strings.Fields(text){
		s,_ := strconv.Atoi(string(v))
	   arr = append(arr,s)
	}

	fmt.Println(sumProduct(arr))
}

func sumProduct(arr []int)int{
	sum := 0
	for i:=0; i<len(arr); i++{
		for j:=i+1; j<len(arr); j++{
			if arr[i] * arr[j] > sum{
				sum = arr[i] * arr[j]
			}
		}
	}
	return sum;
}
