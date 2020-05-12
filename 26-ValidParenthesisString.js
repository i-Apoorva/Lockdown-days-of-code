/** Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo=0, hi=0
    
    for(let c of s){
        lo += c == '(' ? 1 : -1
        hi += c != ')' ? 1 : -1
        if(hi <0){
            break;
        }
        lo= Math.max(lo,0)
    }
    return lo==0
};