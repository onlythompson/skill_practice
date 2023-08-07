"""
Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
The function should return an arrayof possible elements to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed
You may assume that all input numbers are nonnegative
e.g howSum(7, [5,3,4,7]) returns [3,4] 0r [7] and howSum(7, [2,4]) return null.
"""
#bruteforce
def howSum(targetSum, arr):
    #base cases
    if targetSum == 0: return []
    if targetSum < 0: return None

    for i in arr:
        remainder = targetSum - i
        result = howSum(remainder, arr)
        if result is not None:
            result.append(i)
            return result
        

    return None



#optimized
def howSum_Optimized(targetSum, arr, memo={}):
    #base cases
    if targetSum == 0: return []
    if targetSum < 0: return None

    key = f'{targetSum}'

    if key in memo: return memo[key]

    for i in arr:
        remainder = targetSum - i
        result = howSum_Optimized(remainder, arr, memo)
        if result is not None:
            result.append(i)
            memo[key] = result
            return memo[key]

    memo[key] = None
    return memo[key]

my_memo = {}
print(howSum(7, [3,2,2]))
print(howSum(8, [3,2,2]))
print(howSum_Optimized(1000, [7,14,10,100,200], memo=my_memo))
print(my_memo)