
/*------------------------- IBM 2024 SOFTWARE DEVELOPER ----------------------------------------*/
/* QUESTION 2

For each element of an array, a counter is set to 0. The element is compared to each element to its left. 
if the element to the left is greater , the absolute difference is substracted from the counter.
if the element to the left is less the absolute difference is added to the counter . For
each element of the array determine the value of the counter These values shouls be store in an
array and returned

Exanple
Test Cases 
Sample Test 1
Input
arr = [2,4,3]
Output [0,2,0]

Sample Test 2
arr = [2,1,3] -> 0,-1, 
3-2 = 1
3-1 = 2
1+2 = 3

Output [0,-1,3]

*/

// dry run
/*
 arr = [2,4,3] -> 0 output, starting 0 why left element ke left me kuch nhi ho sakta hai possible nhi hai
  4 - 2(4 ke left me 2 jo bhi current value hai usme se hame left me se substract karna hai ) 2 output
  0,2
  last element jo hai wo second index pe 3 hai 3 ke left me kya hai 2 4 
  ab to 2 value hai ab kya kare 3-2 ko minus karenege and 3-4 ko minus karenge
  result ayenag usko add kardenge
  3-2 =1
  3-4 = -1
  1 + - 1 = 0  output
  final output [0,2,0]

*/

function arrayChallenge(arr){
 const ans = [];
 ans.unshift(0);
 for(let i=1;i<arr.length;i++){
    let sum = 0;
    for(let j=0;j<i;j++){
        let ele = arr[i] - arr[j];
        sum+=ele;
    }
    ans.push(sum);
 }
 return ans;
}
arrayChallenge([2,4,3]);