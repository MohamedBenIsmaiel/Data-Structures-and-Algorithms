def maxPairWiseFast(arr):
    max1 = -1
    max2 = -1
    for i in arr:
        if max1 == -1 or i > arr[max1]:
            max1 = arr.index(i)

    for j in arr:
        print("j ",j," max1 ",max1," max2 ",max2," j index ",arr.index(j)," i index ",arr.index(i))

        print(" j > arr[max2] " ,j > arr[max2])
        if max2 == -1 or (j > arr[max2] and arr.index(j) != max1):
            if j == arr[max1] :
                max2 = arr.index(j)
                break
            else:
                max2 = arr.index(j)
         


    return arr[max1] * arr[max2]
