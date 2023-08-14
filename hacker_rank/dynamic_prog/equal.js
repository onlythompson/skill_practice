function equal(arr) {
    // Write your code here
    const _default_arr = [1, 2, 5]

    const Arr = [];
    Arr.push(arr)
    const result = computeAll(Arr, _default_arr)
    return result
}



function computeAll(generateArrs, computeNum) {
    const allarrs = []
    let possibleIterations = 0
    for (let arr of generateArrs) {
        if (allequal(arr)) {
            console.log('Balanced array: ', arr)
            return possibleIterations
        }
        let _max = arr[0]
        let _startIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (_max < arr[i]) {
                _max = arr[i]
                _startIndex = i
            }
        }

        allarrs.push(...computeAllNum(arr, _startIndex, computeNum))
    }
    return possibleIterations = 1 + computeAll(allarrs, computeNum)
}


function computeAll_Optimized(arr, computeNum, memo = {}) {
    // const allarrs = []
    if (allequal(arr) === false) return 0

    let possibleIterations = 0
    //
    let _max = arr[0]
    let _excludeIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (_max < arr[i]) {
            _max = arr[i]
            _excludeIndex = i
        }
    }

    const _scaled_arr = [];
    //apply difference
    for (let num of computeNum) {
        const _c_arr = [...arr]
        for (let i = 0; i < arr.length; i++) {
            if (i !== _excludeIndex) {
                _c_arr[i] += num
            }

        }
        _scaled_arr.push(_c_arr)
    }

    for (let _arr in _scaled_arr) {
        if (allequal(arr)) {
            console.log('Balanced array: ', arr)
            return possibleIterations
        }
    }

}


function computeAllNum(arr, excludeIndex, computeNum) {
    const _scaled_arr = [];
    //apply difference
    for (let num of computeNum) {
        const _c_arr = [...arr]
        for (let i = 0; i < arr.length; i++) {
            if (i !== excludeIndex) {
                _c_arr[i] += num
            }

        }
        _scaled_arr.push(_c_arr)
    }
    return _scaled_arr
}

function allequal(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 0) {
            return false
        }
    }
    return true;
}

console.log('for [2,2,3,7] :', equal([2, 2, 3, 7]))
console.log('for [1,1,5] :', equal([1, 1, 5]))
console.log('for [10,7,12] :', equal([10, 7, 12]))
// console.log('for [10,7,12] :', useX([10, 7, 12]))