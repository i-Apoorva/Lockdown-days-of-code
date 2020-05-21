/** Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
 

Constraints:

The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7]. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0, sum = 0;
    let hash = new Map();
    hash.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hash.has(sum - k)) {
            res += hash.get(sum - k);
        }
        if (hash.has(sum)) {
            hash.set(sum, hash.get(sum) + 1);
        } else {
            hash.set(sum, 1);
        }
    }
    
    return res;
};
