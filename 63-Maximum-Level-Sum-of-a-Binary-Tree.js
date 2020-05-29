/** Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

Example 1:
Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
 
Note:
The number of nodes in the given tree is between 1 and 10^4.
-10^5 <= node.val <= 10^5 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
   if (!root)
        return 1;
    
    const queue = [root];
    const levels = [];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        
        levels.push(level.reduce((acc, curr) => acc + curr));
    }
    
    return levels.indexOf(Math.max(...levels)) + 1;
};

