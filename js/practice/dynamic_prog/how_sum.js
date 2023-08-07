// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
//The function should return an array indicating whether or not it is possible to generate the targetSum using numbers from the array
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative
//e.g howSum(7, [5,3,4,7]) returns true and howSum(7, [2,4]) return false.

//brute force
const howSum  = (targetSum, arr) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of arr){
        const remainder = targetSum - num
        const result = howSum(remainder, arr)
         if(result !==  null){
            return [...result, num]
         }
    }

    return null;
}

const howSum_with_dp  = (targetSum, arr, memo={}) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(targetSum in memo) return memo[targetSum];

    for(let num of arr){
        const remainder = targetSum - num
        const result = howSum_with_dp(remainder, arr, memo)
         if(result !==  null){
            memo[targetSum] = [...result, num]
            return memo[targetSum]
         }
    }
    memo[targetSum]  = null;
    return memo[targetSum];
}


// console.log(howSum(7, [2,3])); // 3,2,2
// console.log(howSum(7, [5,3, 4, 7])); //4,3
// console.log(howSum(7, [2,4])); //null
// console.log(howSum(8, [2,3,5])); //[2,2,2,2]
// console.log(howSum_with_dp(300, [7,14])); //null


//tabulation method

const howSum_tabulation = (targetSum, arr) =>{
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of arr){
                if(i + num <= targetSum) table[i + num] = [...table[i],num];
            }
        }
    }
    return table[targetSum];
}

console.log(howSum_tabulation(7, [2,3])); // 3,2,2
console.log(howSum_tabulation(7, [5,3, 4, 7])); //4,3
console.log(howSum_tabulation(7, [2,4])); //null
console.log(howSum_tabulation(8, [2,3,5])); //[2,2,2,2]
console.log(howSum_tabulation(300, [7,14])); //null