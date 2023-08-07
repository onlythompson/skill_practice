"""
Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
The function should return an array of best combination of elements to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed
You may assume that all input numbers are nonnegative
e.g bestSum(7, [5,3,4,7]) returns [7] and bestSum(7, [2,4]) return null.
"""
#bruteforce
def bestSum(targetSum, arr):
    #base cases
    if targetSum == 0: return []
    if targetSum < 0: return None

    shortestCombination = None

    for i in arr:
        remainder = targetSum - i
        result = bestSum(remainder, arr)
        if result is not None:
            result.append(i)
            combination = result
            if shortestCombination is None or len(combination) < len(shortestCombination):
                shortestCombination = combination
        

    return shortestCombination



#optimized
def bestSum_Optimized(targetSum, arr, memo={}):
    #base cases
    if targetSum == 0: return []
    if targetSum < 0: return None

    key = f'{targetSum}'

    if key in memo: return memo[key]

    shortestCombination = None

    for i in arr:
        remainder = targetSum - i
        result = bestSum_Optimized(remainder, arr, memo)
        if result is not None:
            result.append(i)
            combination = result
            print(combination)
            if shortestCombination is None or len(combination) < len(shortestCombination):
                shortestCombination = combination
        
    memo[key] = shortestCombination
    return memo[key]




#Test Cases
my_memo = {}
print(bestSum(7, [3,2,2,7]))
print(bestSum(8, [3,2,2,5]))
print(bestSum_Optimized(7, [3,2,2,7]))
print(bestSum_Optimized(8, [3,2,2,5]))
# print(bestSum_Optimized(100, [7,14,10,100,200], memo=my_memo))
# print(my_memo)