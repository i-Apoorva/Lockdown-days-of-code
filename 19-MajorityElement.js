/**Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n= nums.length
    let m= new Map()
    for(let i of nums){
        if(!m.has(i)){
            m.set(i,[])
        }
        m.get(i).push(1)
        
        if(m.get(i).length > n/2)
            return i
    }
};