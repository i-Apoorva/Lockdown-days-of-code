/** You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 

Note: Your solution should run in O(log n) time and O(1) space. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    for(let i=0; i<nums.length; i++){
         let n=nums.length, lo=0, hi=Math.floor(n/2)
        while (lo < hi) {
            let m = Math.floor((lo + hi) / 2)
            if (nums[2*m]!=nums[2*m+1]) {hi = m}
            else {lo = m+1}
        }
        return nums[2*lo]
    }
    
};