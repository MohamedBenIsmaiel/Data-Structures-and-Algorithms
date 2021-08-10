from helperFunc import maxPairWiseSlow as maxSlow , maxPairWiseFast as maxFast
from random import randint

while True:
    arr = []
    for i in range(0,randint(0,8)+2):
        arr.append(randint(4,10))
    
    print(arr)

    test1 = maxSlow.maxPairWiseSlow(arr)
    test2 = maxFast.maxPairWiseFast(arr)
    #print("test 2 ",test2)
    if test1 != test2:
        print("Wrong Slow test ",test1," Fast test ",test2)
        break
    else:
        print("OK")
