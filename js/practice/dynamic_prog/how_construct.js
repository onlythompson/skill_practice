// Write a function howConstruct(target, wordBank) that accepts a target string and array of strings
//The function should return a boolean indicating whether or not the 'target' how be constructed by concatenating elements of the 'wordBank' array.

//bruteforce
const howConstruct = (target, wordBank) => {
    if(target === "") return [];
    for(let word of wordBank){
        //get a prefix from the word bank
        // The indexOf() method returns the first index at which a given element how be found in the array, or -1 if it is not present. 
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
            result = howConstruct(suffix, wordBank)
            if(result !== null){
                return [word, ...result];;
            }
        }
    }

    return null;
}

//optimized
const howConstruct_Optimized = (target, wordBank, memo={}) => {
    if(target === "") return [];
    if(target in memo) return memo[target];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            result = howConstruct_Optimized(suffix, wordBank, memo)
            if(result !== null){
                memo[target] =  [word, ...result];
                return memo[target];
            }
        }
    }
    memo[target] = null;
    return memo[target]

}

console.log(howConstruct("abcdef", ['ab', 'abc','cd','def', 'abcd']));
console.log(howConstruct("skateboard", ['ab', 'abc','cd','def', 'abcd']));
console.log(howConstruct("mobilze", ['ab', 'abc','cd','def', 'abcd']));
console.log(howConstruct("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
console.log(howConstruct_Optimized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']));