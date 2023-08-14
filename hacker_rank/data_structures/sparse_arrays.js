function matchingStrings(stringList, queries) {
    // Write your code here
    const result = Array(queries.length)

    for(let q = 0; q < queries.length; q++){
        let count = 0;
        for(let str of stringList){
            if(queries[q] === str){
                count++
            }
        }
        result[q] = count
    }

    return result;
}

console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc']))
console.log(matchingStrings(['aba','baba','aba', 'xzxb'], ['aba','xzxb','ab']))