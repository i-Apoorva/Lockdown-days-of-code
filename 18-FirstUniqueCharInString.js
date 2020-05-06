/** Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++){
        if( s.indexOf(s.slice(i,i+1)) == s.lastIndexOf(s.slice(i,i+1)) ) { return i };
       }

    return -1
};