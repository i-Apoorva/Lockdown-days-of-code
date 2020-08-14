/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4 */

//FIRST:
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i in nums)
    {
		result ^=nums[i];
    }
	return result;
};

//SECOND:
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while(nums.length >-1){
        var x= nums.pop()
        
        var ans= nums.includes(x)
        if(ans=== true){
            var i= nums.indexOf(x)
            nums.splice(i,1)
        } else {
            return x;
            break;
        }
    }
};
