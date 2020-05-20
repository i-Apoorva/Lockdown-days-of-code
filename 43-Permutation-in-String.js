/** Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False 
Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000]. */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(p, s) {
    const pLen = p.length;
    const sLen = s.length;
    if(pLen === 0 || sLen===0 || sLen < pLen) return false
    
    let chars = new Array(26).fill(0);
    
    for(let i=0; i< pLen; i++){
        chars[p[i].charCodeAt()-97]++
    }
    let start=0, end=0, diff=pLen
    
    for(end=0; end<pLen; end++){
        let temp= s[end].charCodeAt()
        chars[temp-97]--
        
        if(chars[temp-97] >= 0){
            diff--
        }
        
    }

    if(diff===0) return true
    
    while(end < sLen){
        let temp= s[start].charCodeAt() 
        
        if(chars[temp-97] >= 0) diff++
        
        chars[temp-97]++
        
        start++;
        temp = s[end].charCodeAt();
        chars[temp-97]--;
           
        if (chars[temp-97] >= 0) diff--;
           
           if (diff == 0){
               return true
           }
           end++;   
    }

    return false
};
