// Write a function bestConstruct(target, wordBank) that accepts a target string and array of strings
//The function should return a boolean indicating whether or not the 'target' best be constructed by concatenating elements of the 'wordBank' array.

//bruteforce
const bestConstruct = (target, wordBank) => {
    if(target === "") return [];
    shortestCombination = null;
    for(let word of wordBank){
        //get a prefix from the word bank
        // The indexOf() method returns the first index at which a given element best be found in the array, or -1 if it is not present. 
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
            result = bestConstruct(suffix, wordBank)
            if(result !== null){
                combination =  [word, ...result];
                if (shortestCombination === null || combination.length < shortestCombination.length){
                    shortestCombination = combination
                }
            }
        }
    }

    return shortestCombination;
}

//optimized
const bestConstruct_Optimized = (target, wordBank, memo={}) => {
    if(target === "") return [];
    if(target in memo) return memo[target];

    shortestCombination = null;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            result = bestConstruct_Optimized(suffix, wordBank, memo)
            if(result !== null){
                combination =  [word, ...result];
                if (shortestCombination === null || combination.length < shortestCombination.length){
                    shortestCombination = combination
                }
            }
        }
    }
    memo[target] = shortestCombination;
    return memo[target]

}

console.log(bestConstruct("abcdef", ['ab', 'abc','cd','def', 'abcd']));
console.log(bestConstruct("skateboard", ['ab', 'abc','cd','def', 'abcd']));
console.log(bestConstruct("mobilze", ['ab', 'abc','cd','def', 'abcd']));
console.log(bestConstruct("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
console.log(bestConstruct_Optimized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']));