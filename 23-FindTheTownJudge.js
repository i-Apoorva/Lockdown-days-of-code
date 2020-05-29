/** In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

 

Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2 
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 

Note:

1 <= N <= 1000
trust.length <= 10000
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N */

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
   let count = new Array(N+1).fill(0)
        for (let [u,v] of trust) {
            count[u]--;
            count[v]++;
        }
    
        for (let i = 1; i <= N; ++i) {
            if (count[i] == N - 1) return i;
        }
        return -1;
 
 
//     let howManyPplIItrust = new Array(N).fill(0);
//     let howManyPplTrustMe = new Array(N).fill(0);
    
  
//     for(let pairsIndex = 0; pairsIndex < trust.length; pairsIndex++) {
//       let manWhoTrusts = trust[pairsIndex][0];
//       let manWhoIsTrusted = trust[pairsIndex][1];
  
//       howManyPplIItrust[manWhoTrusts - 1]++;
//       howManyPplTrustMe[manWhoIsTrusted - 1]++;
//     }
//     for(let i = 0; i < N; i++) {
//       if(howManyPplTrustMe[i]=== N-1 && howManyPplIItrust[i] === 0) {
//         return i+1;
//       }
//     }
  
//     return -1;
  };

