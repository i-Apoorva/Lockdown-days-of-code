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
//FIRST:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ans=[]
    if(!nums1.length || !nums2.length) return ans;
    
    for(let i in nums1){
        if(nums2.includes(nums1[i])){
            ans.push(nums1[i])
            let d= nums2.indexOf(nums1[i])
            nums2.splice(d,1)
        }
    }
    return ans
};

//SECOND:
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
