/**Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "". */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let x=[]
    let y=[]
    for(let i of S){
        if(i !== "#"){
            x.push(i)
        }
        else
            x.pop()
    }
    
    for(let i of T){
        if(i !== "#"){
            y.push(i)
        }
        else
            y.pop()
    }
    
    let s= x.join('')
    let t= y.join('')
    
    if(s.localeCompare(t) === 0){
        return true
    }
     return false
    
};