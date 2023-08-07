
/*
* Say that you are a traveller on a 2D grid. You begin in the top-left corner 
and yor goal is travel to the bottom-right corner. You may only move down or right.
*/

//Obviously you cannot move diagonally..

//establishing base cases
//(1,1) => 1
//(1,0) or (0,1) => 0

//brute force
const grid_traveller = (n, m) => {
    if(n === 0 || m === 0) return 0;
    if(n === 1 && m === 1) return 1;

    return grid_traveller(n - 1, m) + grid_traveller(n,m - 1)
}

//optimized
const grid_traveller_with_dp = (n, m, memo ={}) => {
    const key = `${n},${m}`;
    if(key in memo) return memo[key]
    if(n === 0 || m === 0) return 0;
    if(n === 1 && m === 1) return 1;
    memo[key] = grid_traveller_with_dp(n - 1, m, memo) + grid_traveller_with_dp(n,m - 1, memo)
    return memo[key]
}

// console.log(grid_traveller(1,1));
// console.log(grid_traveller(2,3));
// console.log(grid_traveller(3,2));
// console.log(grid_traveller(3,3));
// console.log(grid_traveller_with_dp(18,18));

//tabulation_strategy
const gt_tabulation = (n, m) => {
    const grid = Array(n + 1)
    .fill().map(()=> Array(m + 1).fill(0))
    grid[1][1] = 1;
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= m; j++){
            const current = grid[i][j]
            if(j + 1 <= m) grid[i][j + 1] += current
            if(i + 1 <= n) grid[i + 1][j] += current
        }
    }
    // grid[0][0] = 0;
    // console.log(grid)

    return grid[n][m]

}

const my_gt_tabulation = (n, m) => {
    const grid = []
    for(let i = 0; i <= n; i++){
        grid.push(Array(m + 1).fill(0))
    }

    // console.log(grid)
    grid[1][1] = 1;
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= m; j++){
            const current = grid[i][j]
            if(j + 1 <= m) grid[i][j + 1] += current
            if(i + 1 <= n) grid[i + 1][j] += current
        }
    }
    // console.log(grid)
    console.log(grid[n][m])
}
// gt_tabulation(3,3)
my_gt_tabulation(3,3)
my_gt_tabulation(18,18)
my_gt_tabulation(12,12)

// console.log(gt_tabulation(1,1));
// console.log(gt_tabulation(2,3));
// console.log(gt_tabulation(3,2));
// console.log(gt_tabulation(3,3));
// console.log(gt_tabulation(18,18));