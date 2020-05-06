/** Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter. */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = new Map()
    for(let str of strs){
        let ss= str.split('').sort().join('')
        if(!map.has(ss)) {
            map.set(ss, new Array())
             map.get(ss).push(str)
        }
        else{
            map.get(ss).push(str)
        }
        
    }
    let n= map.size
    let ans= new Array()
    let it= map.values()
    for(var i=0;i<n;i++) {
        ans.push(it.next().value)
    }
    return ans
};