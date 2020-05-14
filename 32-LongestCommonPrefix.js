/** Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    let x= strs[0].length
    let common= strs[0]

    for(let i=1; i<strs.length; i++){
        for(let j=0; j<x; j++){
        if(strs[i].charAt(j) !== common.charAt(j))
            common= common.slice(0, j)
        }
    }
    return common
};