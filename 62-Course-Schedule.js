/** There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 

Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(num, prereq) {
    let G = [], degree= new Array(num).fill(0), bfs=[]
    
    for (let i = 0; i < num; ++i) G[i] = []
    
    for(let [u,v] of prereq){
        G[v].push(u)
        degree[u]++
    }
    
    for (let i = 0; i < num; ++i) if (degree[i] == 0) bfs.push(i)
    
    for (let i = 0; i < bfs.length; ++i){
        for(let j of G[bfs[i]]){
                if (--degree[j] == 0) bfs.push(j)
        }
    }
        return bfs.length == num
    
};
