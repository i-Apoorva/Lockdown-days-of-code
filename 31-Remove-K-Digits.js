/**Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes. */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let n= num.length
    if(n===k) return '0'
    let arr= num.split('')
    while(k>0){
        let i=0
        while(arr[i]<=arr[i+1] && i+1<n) i++
         arr.splice(i,1)
        k--
    }
     
    while(arr.length && arr[0] === '0') {
        arr.shift();
    }
    
    return arr.length ? arr.join('') : '0';
    
}