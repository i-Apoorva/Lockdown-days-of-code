/** Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab". */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res = [];
    const pLen = p.length;
    const sLen = s.length;
    if(pLen === 0 || sLen===0 || sLen < pLen) return res
    
    let chars = new Array(26).fill(0);
    
    for(let i=0; i< pLen; i++){
        chars[p[i].charCodeAt()-97]++
    }
    
    console.log({chars})
    let start=0, end=0, diff=pLen
    
    for(end=0; end<pLen; end++){
        let temp= s[end].charCodeAt()
        chars[temp-97]--
        
        if(chars[temp-97] >= 0){
            diff--
        }
        
    }

    if(diff===0) res.push(0)
    
    while(end < sLen){
        let temp= s[start].charCodeAt() 
        
        if(chars[temp-97] >= 0) diff++
        
        chars[temp-97]++
        
        start++;
        temp = s[end].charCodeAt();
        chars[temp-97]--;
           
        if (chars[temp-97] >= 0) diff--;
           
           if (diff == 0){
               res.push(start);
           }
           end++;   
    }

    return res
};
