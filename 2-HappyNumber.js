/*Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, counter=0) {
    res= false;
    if(counter< 8){
     let sum=0
    while(n >0){
        sum+= Math.pow(n%10,2)
        n= Math.floor(n/10)
    }
    if(sum===1){
        return res= true;
    }
    else{
      counter++
     isHappy(sum, counter)
    }
    }
    return res
    
};