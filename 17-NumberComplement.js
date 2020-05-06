/** Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

Example 1:

Input: 5
Output: 2 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var bin= num.toString(2).split('')
    
    for(let i=0; i<bin.length; i++){
     (bin[i]==="1")?bin.splice(i,1,0) : bin.splice(i,1,1)
      }
    
    let y= parseInt(bin.join('') ,2)
    
    return y
    
};