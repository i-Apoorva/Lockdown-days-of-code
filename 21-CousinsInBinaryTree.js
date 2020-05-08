/** In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
Input: root = [1,2,3,4], x = 4, y = 3
Output: false
*/

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let c=0
    function find(node, w, parent, c=0){
        c++
        if(!node) return 0;

        if(node.val=== w){
            return [parent,c]
        }
        else {
             return find(node.right, w, node.val,c) || find(node.left, w, node.val,c)
        }   
    }
    
    let xP= find(root, x, -1);
    let yP= find(root, y, -1);
    
    if(xP[0] !== yP[0] && xP[1]===yP[1]){
        return true
    }
    
    return false
    
};