/*
Given three integers, i , j, and k, a sequence sum to be the value
of i(i+1) + (i+2) + (i+3)+ ...+ j + (j-1) + (j-2) + (j-3) +...+k(increment from i until it equals j,
then decrement from j until it equals k). Given values i,j, and k , calculate the sequence sum as described.

Example
i = 5
j = 9
k = 6

Sum all the values from i to j and back to k: 5 + 6 + 7 + 8 + 9 + 8 + 7 + 6 = 56

Sample Input 
i = 0
j = 5
k = -1

Sample Output 24

Explanation 
i=0;
j=5
k=-1
0+1+2+3+4+5+4+3+2+1+0+-1 = 24
*/

function getSequenceSum(i,j,k){
  let sum = 0;

  // Sum from i to j
  for(let n=i;n<=j;n++){
    sum+=n;
  }

  // Sum from j-1 down to k
  for(let n = j-1; n>=k; n--){
    sum+=n;
  }
  return sum;
}
//getSequenceSum(0,5,-1);
getSequenceSum(5,9,6);