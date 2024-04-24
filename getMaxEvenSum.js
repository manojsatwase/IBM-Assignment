/*
One of the shops in HackerMall is offering discount coupons based on a puzzling
problem. There are n tags where each tag has a value denoted by val[i].
A customer  needs to choose the tags in such a way that sum of values is even.

The goal is to find the maximum possible even sum of values of tags that can be chosen.

Note :

* it is guaranteed that there is at least one tag with an even value.
* The tags can have positive or negative
* if the sum of positive elements is event , return it
* Find the miximum even sum by modifying odd positive elements

Sample Input
const a = [-1, -2, -3, 8, 7];
const n = a.length;
getMaxEvenSum(a,n)

expected output should be 14
*/

function getMaxEvenSum(arr){
    let pos_sum = 0;

    // Calculate sum of positive element
    for(let i=0;i<n;i++){
      if(arr[i] > 0){
        pos_sum += arr[i];
      }
    }

    // If the sum of positive elements is even, return it
    if(pos_sum % 2 === 0){
        return pos_sum;
    }

    // Find the maximum even sum by modifying odd positive elements
    let ans = 0
    for(let i=0;i<n;i++){
        if(arr[i] % 2 !=0 ){ 
        // not odd number may be positive or negative
        if(arr[i] > 0){
            ans = Math.max(ans,pos_sum - arr[i]); // odd positive number 
        }else{
            ans = Math.max(ans, pos_sum + arr[i]); // odd negative number
        }
    }
    }
    return ans;
}

const arr = [-1,-2,-3,8,7];


getMaxEvenSum(arr)