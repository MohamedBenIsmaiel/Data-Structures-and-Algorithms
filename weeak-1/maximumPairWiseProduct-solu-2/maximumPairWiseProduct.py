arr = input("Enter array ").split(" ")
arr = list(map(int, arr))

def sumProduct(arr):
    max1 = -1
    max2 = -2

    for value1 in arr:
        if value1 > max1:
            max1 = value1

    for value2 in arr:
        if value2 > max2 and value2 != max1:
           max2 = value2 

    return max1 * max2 

print(sumProduct(arr))
