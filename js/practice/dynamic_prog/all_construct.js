// Write a function allConstruct(target, wordBank) that accepts a target string and array of strings
//The function should return a 2D array containing all possible ways that the target can be constructed by concatenating elements of the 'wordBank' array.
//Each element of the 2D array should represent one combination that constructs the target
//You may reuse elements of 'wordBank' as many times as needed

//bruteforce
const allConstruct = (target, wordBank) => {
    if(target === "") return [[]];
    const all_result = []
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            result = allConstruct(suffix, wordBank);
            if(result !== null){
                combined_result = result.map(x => [word, ...x]);
                all_result.push(...combined_result)
            }
        }
    }

    return all_result;
}

//optimized
const allConstruct_Optimized = (target, wordBank, memo={}) => {
    if(target === "") return [[]];
    if(target in memo) return memo[target];
    
    const all_result = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            result = allConstruct_Optimized(suffix, wordBank, memo)
            if(result !== null){
                combined_result = result.map(x => [word, ...x]);
                all_result.push(...combined_result)
            }
        }
    }
    memo[target] = all_result;
    return memo[target]

}

// console.log(allConstruct("abcdef", ['ab', 'abc','cd','def', 'abcd']));
// console.log(allConstruct("purple", ['purp', 'p','ur','le', 'purpl']));
// console.log(allConstruct("mobilze", ['ab', 'abc','cd','def', 'abcd']));
// console.log(allConstruct("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
// console.log(allConstruct_Optimized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']))

//tabulation
const allConstruct_Tabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);

    table[0] = [[]];
    for (let i = 0; i < target.length; i++){
            for(let word of wordBank){
                //if word matches the characters starting at position i
                if(target.slice(i, i + word.length) === word){
                    const combinations = table[i].map(subArr => [...subArr, word]);
                    table[i + word.length].push(...combinations)
                }
            }
        // }
    }

    return table[target.length]
}

console.log(allConstruct_Tabulation("abcdef", ['ab', 'abc','cd','def', 'abcd']));
console.log(allConstruct_Tabulation("purple", ['purp', 'p','ur','le', 'purpl']));
console.log(allConstruct_Tabulation("mobilze", ['ab', 'abc','cd','def', 'abcd']));
console.log(allConstruct_Tabulation("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
// console.log(allConstruct_Tabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']))