def maxPairWiseSlow(arr):
    sum = 0
    count = 0
    for i in arr:
        count += 1
        for j in arr[count::]:
            if i * j > sum:
                sum = i * j
    return sum
