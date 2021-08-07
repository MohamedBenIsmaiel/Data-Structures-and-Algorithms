def maxPairWiseFast(arr):
    max1 = 0
    max2 = 0
    for i in arr:
        if i > max1:
            max1 = i

    for i in arr:
        if i > max2 and i != max1:
            max2 = i
    return max1 * max2
