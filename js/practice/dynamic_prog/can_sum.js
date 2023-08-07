// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
//The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative
//e.g canSum(7, [5,3,4,7]) returns true and canSum(7, [2,4]) return false.

//brute force
const canSum  = (targetSum, arr) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of arr){
        const remainder = targetSum - num
        if(canSum(remainder, arr) === true){
            return true;
        }
    }

    return false;
}

const canSum_with_dp  = (targetSum, arr, memo={}) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    if(targetSum in memo) return memo[targetSum];

    for(let num of arr){
        const remainder = targetSum - num
        if(canSum_with_dp(remainder, arr, memo) === true){
            memo[targetSum] = true;
            return memo[targetSum]
        }
    }
    memo[targetSum]  = false;
    return memo[targetSum];
}


// console.log(canSum(7, [2,3])); //true
// console.log(canSum(7, [5,3, 4, 7])); //true
// console.log(canSum(7, [2,4])); //false
// console.log(canSum(8, [2,3,5])); //true
// console.log(canSum_with_dp(300, [7,14])); //false

//tabulation strategy
const canSum_tabulation = (targetSum, arr) =>{
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= targetSum; i++){
        if(table[i] === true){
            for(let num of arr){
                table[i + num] = true;
            }
        }
    }
    console.log(table.length);
    return table[targetSum];
}

const my_canSum_tabulation = (targetSum, arr) =>{
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= targetSum; i++){
        if(table[i] === true){
            for(let num of arr){
                if(i + num <= targetSum) table[i + num] = true;
            }
        }
    }
    console.log(table.length);
    return table[targetSum];
}


// console.log(canSum_tabulation(7, [2,3])); //true
// console.log(canSum_tabulation(7, [5,3, 4, 7])); //true
// console.log(canSum_tabulation(7, [2,4])); //false
console.log(canSum_tabulation(8, [2,3,5])); //true
console.log(canSum_tabulation(300, [7,14])); //false
console.log(my_canSum_tabulation(8, [2,3,5])); //true
console.log(my_canSum_tabulation(300, [7,14])); //false