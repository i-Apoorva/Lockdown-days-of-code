/** We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a, b) => b-a);
        x1= stones[0]
        x2= stones[1]
        if(x1 !== x2){
           stones.push(x1-x2)
        }
        stones.shift()
        stones.shift()   
    }
   
   if(stones.length === 1){
       return stones[0]
   }
   else{
   return 0}
   
};