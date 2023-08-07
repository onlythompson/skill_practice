//common recursion without dp => 2^2n
const fib = (n) =>{
    if(n <= 2) return 1;
    return fib(n -1) + fib(n - 2)
}
//with dp using memoization
const fibWithDp = (n, memo={}) =>{
    if(n <= 2) return 1;
    // if(memo[`${n}`]) return memo[`${n}`] //Me
    if(`${n}` in memo) return memo[`${n}`] //Alvin Concept
    memo[`${n}`] = fibWithDp(n -1, memo) + fibWithDp(n - 2, memo);
    return memo[`${n}`];
}

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

// console.log(fibWithDp(50));

//Tabulation
const fib_tabulation = (n) =>{
    const table = Array(n + 1).fill(0);
    table[1] = 1
    for(let i = 0; i <= n; i++){
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n]
}
// console.log(fib_tabulation(6));//8
// console.log(fib_tabulation(7));//13
// console.log(fib_tabulation(8));//21
// console.log(fib_tabulation(50));//1258.......

const my_fib_tabulation = (n) =>{
    const table = Array(n + 1).fill(0);
    table[1] = 1
    for(let i = 2; i <= n; i++){
        table[i] = table[i - 1] + table[i - 2]
    }
    return table[n]
}

console.log(my_fib_tabulation(6));//8
console.log(my_fib_tabulation(7));//13
console.log(my_fib_tabulation(8));//21
console.log(my_fib_tabulation(50));//1258.......

