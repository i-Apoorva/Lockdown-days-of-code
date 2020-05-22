/** Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together. */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res='', m= new Map()
    for(let i of s){
        if(!m.has(i)) m.set(i,0)
        m.set(i, m.get(i)+1)
    }

    [...m.entries()].sort((a,b) => b[1] - a[1]).forEach(function(v){
    	for(var j=0;j<v[1];j++){
    		res+= v[0]
    	}
    });
    
    return res 
};
