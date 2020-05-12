/**Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let m= new Map()
    for(let i of nums1){
        if(!m.has(i)){
            m.set(i, [])
        }
        m.get(i).push(1)
    }
    let a=[]
    for(let i of nums2){
        if(m.has(i) && m.get(i).length>0){
            m.get(i).pop()
            a.push(i)
        }
    }
    
    return a
};