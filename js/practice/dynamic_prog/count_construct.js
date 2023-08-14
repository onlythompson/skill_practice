// Write a function countConstruct(target, wordBank) that accepts a target string and array of strings
//The function should return the number of was that the 'target' count be constructed by concatenating elements of the 'wordBank' array.
//You may reuse elements of 'wordBank' as many times as needed

//bruteforce
const countConstruct = (target, wordBank) => {
    if(target === "") return 1;
    let possibleCombinations = 0
    for(let word of wordBank){
        //get a prefix from the word bank
        // The indexOf() method returns the first index at which a given element count be found in the array, or -1 if it is not present. 
        // indexOf(searchElement)
        // indexOf(searchElement, fromIndex)

        if(target.indexOf(word) === 0){
            // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
            // where start and end represent the index of items in that array. 
            // The original array will not be modified.
            // slice()
            // slice(start)
            // slice(start, end)

            const suffix = target.slice(word.length);
            result = countConstruct(suffix, wordBank);

            //My Implementation
            if(result !== 0){
                possibleCombinations += result;
            }

            //Alvins Implementation
            // possibleCombinations += result;
        }
    }

    return possibleCombinations;
}

//optimized
const countConstruct_Optimized = (target, wordBank, memo={}) => {
    if(target === "") return 1;
    if(target in memo) return memo[target];
    
    let possibleCombinations = 0

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            result = countConstruct_Optimized(suffix, wordBank, memo)
            //Alvins Implementation
            possibleCombinations += result;
        }
    }
    memo[target] = possibleCombinations;
    return memo[target]

}

// console.log(countConstruct("abcdef", ['ab', 'abc','cd','def', 'abcd']));
// console.log(countConstruct("purple", ['purp', 'p','ur','le', 'purpl']));
// console.log(countConstruct("mobilze", ['ab', 'abc','cd','def', 'abcd']));
// console.log(countConstruct("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
// console.log(countConstruct_Optimized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']))


//tabulation
const countConstruct_Tabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);

    table[0] = 1;
    for (let i = 0; i < target.length; i++){
        // if(table[i] !== 0){
            for(let word of wordBank){
                //if word matches the characters starting at position i
                if(target.slice(i, i + word.length) === word){
                    table[i + word.length] += table[i];
                }
            }
        // }
    }

    return table[target.length]
}

console.log(countConstruct_Tabulation("abcdef", ['ab', 'abc','cd','def', 'abcd']));
console.log(countConstruct_Tabulation("purple", ['purp', 'p','ur','le', 'purpl']));
console.log(countConstruct_Tabulation("mobilze", ['ab', 'abc','cd','def', 'abcd']));
console.log(countConstruct_Tabulation("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
console.log(countConstruct_Tabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']))
