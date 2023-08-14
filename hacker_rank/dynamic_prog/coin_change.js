function getWays(n, c) {
    // Write your code here
    
    if(n === 0) return 1;
    if(n < 0) return 0;
    
    let counter = 0;
    
    for(let num of c){
        const remainder = n - num;
        const result = getWays(remainder, c)
        counter += result
    }

    // for(let i = startIndex; i < c.length; i++){
    //     const remainder = n - num;
    //     const result = getWays(remainder, c, startIndex)
    //     counter += result
    // }
    
    return counter;

}

function mygetWays(n, c) {
    return getWaysSub_Optimized(n, c)
}
//bruteforce
function getWaysSub(n, c, startIndex=0){
     
    if(n === 0) return 1;
    if(n < 0) return 0;

    let counter = 0;

    for(let i = startIndex; i < c.length; i++){
        const remainder = n - c[i];
        const result = getWaysSub(remainder, c, i)
        counter += result
    }
    return counter;
}

//optimized
function getWaysSub_Optimized(n, c, startIndex=0, memo={}){
     
    if(n === 0) return 1;
    if(n < 0) return 0;

    const key = `${startIndex}-${n}`
    
    if(key in memo) return memo[key];

    let counter = 0;

    for(let i = startIndex; i < c.length; i++){
        const remainder = n - c[i];
        const result = getWaysSub_Optimized(remainder, c, i, memo)
        counter += result;
    }
    
    memo[key] = counter;
    return counter;
}


const my_memo = {}
console.log(getWaysSub(3, [8,3,1,2]))
console.log(mygetWays(3, [8,3,1,2]))
console.log(getWaysSub(4, [1,2,3]))
console.log(mygetWays(4, [1,2,3],0,my_memo))

console.log(my_memo)