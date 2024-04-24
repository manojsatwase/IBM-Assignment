/*------------------------- IBM 2024 SOFTWARE DEVELOPER ----------------------------------------*/
/* QUESTION 4
The cost of stock on each day is given in an array, arr. An investor wants to buy the stocks in triplets
such that the sum of the cost for three days is divisible by d.
The goal is to find the number of distinct triplets (i,j,k) such that i<j<k and the sum 
(a[i]+a[j]+a[k]) is divisible by d

Eample

Let arr , prices of stock = [3,3,4,7,8] and d=5 . {3,3,4} {3,4,8} {3,4,8}
Following are the triplets whose sum is divisible by d (1 based indexing)

1 Triplet with indices - (1,2,3) , sum = 3+3+4 which is equal to 10
2 Triplet with indices - (1,3,5) , sum = 3+4+8 which is equal to 15
3 Triplet with indices - (2,3,4) , sum = 3+4+8 which is equal to 15

Hence the answer is 3

*/

function findTheTriplets(prices, d = 5) {
    let n = prices.length;
    let count = 0;
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          let sum = prices[i] + prices[j] + prices[k];
          if (sum % d === 0) {
            count++;
          }
        }
      }
    }
    return count;
  }
  
  console.log(findTheTriplets([3, 3, 4, 7, 8], 5));