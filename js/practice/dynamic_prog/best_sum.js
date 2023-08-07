// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
//The function should return a best array combination of elements to generate the targetSum using numbers from the array.
//returns null if not possible
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative
//e.g bestSum(7, [5,3,4,7]) returns [7] and bestSum(7, [2,4]) return null.

//brute force
const bestSum  = (targetSum, arr) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null

    for(let num of arr){
        const remainder = targetSum - num
        const result = bestSum(remainder, arr)
         if(result !==  null){
            const combination = [...result, num]
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
         }
    }


    return shortestCombination;
}

const bestSum_with_dp  = (targetSum, arr, memo={}) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(targetSum in memo) return memo[targetSum];

    let shortestCombination = null

    for(let num of arr){
        const remainder = targetSum - num
        const result = bestSum_with_dp(remainder, arr, memo)
         if(result !==  null){
            const combination = [...result, num]
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
         }
    }
    memo[targetSum]  = shortestCombination;
    return memo[targetSum];
}


// console.log(bestSum(7, [2,3])); // 3,2,2
// console.log(bestSum(7, [5,3, 4, 7])); //4,3
// console.log(bestSum(7, [2,4])); //null
// console.log(bestSum(8, [2,3,5])); //[2,2,2,2]
// console.log(bestSum_with_dp(100, [7,14,10,25])); //[25,25,25,25]
// console.log(bestSum_with_dp(300, [2,15,25,50])); //[50,50,50,50,50,50]
// console.log(bestSum_with_dp(1000, [2,15,25,50,200])); //[200,200,200,200,200]


//tabulation
const bestSum_tabulation = (targetSum, arr) =>{
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of arr){
                if(i + num <= targetSum) {
                    combination = [...table[i],num]
                    if(table[i + num]  === null || combination.length < table[i + num].length){
                        table[i + num] = combination;
                    }
                }
            }
        }
    }
    return table[targetSum];
}


console.log(bestSum_tabulation(7, [2,3])); // 3,2,2
console.log(bestSum_tabulation(7, [5,3, 4, 7])); //4,3
console.log(bestSum_tabulation(7, [2,4])); //null
console.log(bestSum_tabulation(8, [2,3,5])); //[2,2,2,2]
console.log(bestSum_tabulation(100, [7,14,10,25])); //[25,25,25,25]
console.log(bestSum_tabulation(300, [2,15,25,50])); //[50,50,50,50,50,50]
console.log(bestSum_tabulation(1000, [2,15,25,50,200])); //[200,200,200,200,200]