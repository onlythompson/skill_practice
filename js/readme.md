### Dynamic Programming

This is basically based on on solving computational challenges using 2 fundametals approaches/concepts
- Memoization
- Tabulation

#### Memoization Guidelines
- Make it work
    - visualize the problem as a tree
    - implement the tree using recursion. base cases are the leaf
    - test it
- Make it efficient
    - add a memo object
    - add a base case to return memo value
    - store return values into the memo
##### The Challeges Addressed
-   canSum  -> "Can you do it? yes/no" - Decision Challenge
-   howSum -> "How will you do it?" - Combinatoric Challenge
-   bestSum -> "What are the best possible ways of doing it?" - Optimization Challenge

#### Tabulation Strategy Guidelines
-   Visualize the problem as a table
-   size the table based on the inputs
-   initialize the table with default values
-   seed the trivial answer into the table
-   iterate through the table and 
-   fill the further positions based on the current position.