// Write a function canConstruct(target, wordBank) that accepts a target string and array of strings
//The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.
//bruteforce
const canConstruct = (target, wordBank) => {
    if(target === "") return true;
    for(let word of wordBank){
        //get a prefix from the word bank
        // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
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
            if(canConstruct(suffix, wordBank) === true){
                return true;
            }
        }
    }

    return false;
}


//optimized
const canConstruct_Optimized = (target, wordBank, memo={}) => {
    if(target === "") return true;
    if(target in memo) return memo[target];
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
            // where start and end represent the index of items in that array. 
            // The original array will not be modified.
            // slice()
            // slice(start)
            // slice(start, end)

            const suffix = target.slice(word.length);
            if(canConstruct_Optimized(suffix, wordBank, memo) === true){
                memo[target] = true;
                return memo[target]
            }
        }
    }
    memo[target] = false;
    return memo[target];
}

console.log(canConstruct("abcdef", ['ab', 'abc','cd','def', 'abcd']));
console.log(canConstruct("skateboard", ['ab', 'abc','cd','def', 'abcd']));
console.log(canConstruct("mobilze", ['ab', 'abc','cd','def', 'abcd']));
console.log(canConstruct("enterapotentpot", ['a', 'p','ent','enter', 'ot', 'o', 't']));
console.log(canConstruct_Optimized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'eee','eeeeeee','eeeeeeeeee', 'abcd']));