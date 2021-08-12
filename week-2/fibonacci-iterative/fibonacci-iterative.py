num = int(input("Enter Number ").strip())

arr = []
def fibonacci(num):
    first = 0
    second = 1
    sum = 0
    for i in range(num):
        arr.append(first)
        first, second = second , first + second
    return first
print(fibonacci(num))
print("list of fib.. ",arr)
