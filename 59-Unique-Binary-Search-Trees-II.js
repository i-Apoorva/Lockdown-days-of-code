/**  Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3 */
   
   /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0){
        return [];
    }
    return generateSubTrees(1, n);
};

var generateSubTrees = function(start, end){
    const subTrees = []
    if (start > end){
        subTrees.push(null);
        return subTrees;
    }
    
    for (let i = start;i <= end; i++){
        const leftSubTrees = generateSubTrees(start, i-1);
        const rightSubTrees = generateSubTrees(i+1, end);
        
        for (const l of leftSubTrees){
            for (const r of rightSubTrees){
                const currentTree = new TreeNode(i,l,r)
                subTrees.push(currentTree);
            }
        }
    }
    return subTrees;
}
