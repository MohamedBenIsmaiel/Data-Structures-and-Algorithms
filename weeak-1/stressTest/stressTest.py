from helperFunc import maxPairWiseSlow as maxSlow , maxPairWiseFast as maxFast
from random import randint

while True:
    arr = []
    for i in range(0,randint(0,8)):
        arr.append(randint(4,10))
    
    for i in arr:
        print("i ", i)

    test1 = maxSlow.maxPairWiseSlow(arr)
    test2 = maxFast.maxPairWiseFast(arr)
    if test1 != test2:
        print("Wrong test1 ",test1," test2 ",test2)
        break
    else:
        print("OK")
