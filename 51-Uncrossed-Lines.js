/** We write the integers of A and B (in the order they are given) on two separate horizontal lines.

Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

A[i] == B[j];
The line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the maximum number of connecting lines we can draw in this way. 
Input: A = [1,4,2], B = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.

Example 2:

Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
Output: 3*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    let n= A.length, m= B.length, DP= []
    
    for (let i = 0; i <= n; i++) {
        DP[i] = new Array(m+1).fill(0);
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(A[i-1]=== B[j-1]){
                DP[i][j]= DP[i-1][j-1] + 1
            } else {
                DP[i][j]= Math.max(DP[i-1][j], DP[i][j-1])
            }
        }
    }
    return DP[n][m]
};
