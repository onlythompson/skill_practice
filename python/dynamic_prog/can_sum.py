"""
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed
You may assume that all input numbers are nonnegative
e.g canSum(7, [5,3,4,7]) returns true and canSum(7, [2,4]) return false.
"""
#bruteforce
def canSum(targetSum, arr):
    #base cases
    if targetSum == 0: return True
    if targetSum < 0: return False

    for i in arr:
        remainder = targetSum - i
        if canSum(remainder, arr) == True: return True

    return False



#optimized
def canSum_Optimized(targetSum, arr, memo={}):
    #base cases
    if targetSum == 0: return True
    if targetSum < 0: return False

    key = f'{targetSum}'

    if key in memo: return memo[key]

    for i in arr:
        remainder = targetSum - i
        if canSum_Optimized(remainder, arr, memo) == True: 
            memo[key] = True
            return Tmemo[key]

    memo[key] = False
    return memo[key]

my_memo = {}
print(canSum(7, [3,2,2]))
print(canSum(7, [3,2,2]))
print(canSum_Optimized(1000, [7,14], memo=my_memo))

print(my_memo)