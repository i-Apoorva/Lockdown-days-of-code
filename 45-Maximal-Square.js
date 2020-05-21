/** Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(A) {
    let res = 0;
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[0].length; j++) {
                if (A[i][j] > 0 && i > 0 && j > 0) {
                    A[i][j] = Math.min(A[i - 1][j - 1], A[i - 1][j], A[i][j - 1]) + 1;
                }
                if(A[i][j] >res)
                    res=A[i][j];
            }
        }
        return res*res;
};
