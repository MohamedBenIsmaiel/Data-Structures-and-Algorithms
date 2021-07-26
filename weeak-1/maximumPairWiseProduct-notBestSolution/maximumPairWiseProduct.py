arr = input("Enter Array ").split(" ")
arr = list(map(int, arr))

def getMaxProduct(arr):
    sum = 0
    count = 0;
    for value1 in arr:
        count += 1
        for value2 in arr[count::]:
            if value1 * value2 > sum:
                sum = value1 * value2 
    return sum

print(getMaxProduct(arr));
