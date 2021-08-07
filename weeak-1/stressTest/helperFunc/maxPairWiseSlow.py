def maxPairWiseSlow(arr):
    sum = 0
    for i in arr:
        count = 0
        count += 1
        for j in arr[count::]:
            if j == i:
                continue
            if i * j > sum:
                sum = i * j
    return sum
