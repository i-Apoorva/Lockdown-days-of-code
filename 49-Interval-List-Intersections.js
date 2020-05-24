/** Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].) 
Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    if(!A || !A.length || !B || !B.length) {
        return [];
    }
    
    const result = [];
    
    let pa = 0;
    let pb = 0;
    
    while(pa<A.length && pb<B.length) {
        const [aStart, aEnd] = A[pa];
        const [bStart, bEnd] = B[pb];
        
        const start = Math.max(aStart, bStart);
        const end = Math.min(aEnd, bEnd);
        
        if(start<=end) {
            result.push([start, end]);
        }
        
        if(aEnd<bEnd) {
            pa++;
        } else {
            pb++;
        }
    }
    
    return result;
};

