/** You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let m=coordinates.length
     let slope =(coordinates[1][1]-coordinates[0][1]) /(coordinates[1][0]-coordinates[0][0])
    
    for(let i=0; i<m-1; i++){
       let a= (coordinates[i+1][1]-coordinates[i][1])/(coordinates[i+1][0]-coordinates[i][0])
       if(a!==slope)
           return false
    }
    return true
};

