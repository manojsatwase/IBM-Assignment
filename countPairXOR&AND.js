/*
For an array arr of n positive integers, count the unordered pairs (i,j) (0<= i < n)
where arr[i] XOR arr[j] > arr[i] AND arr[j]. XOR denotes the bitwise XOR operation 
and AND denotes the bitwise AND operation.

Example 
Given n =4, arr = [4,3,5,2]. All unordered pairs (i,j) are - 

Indices     XOR      AND      XOR  > AND
(0,1)        7        0           True
(0,2)        1        4           False
(0,3)        6        0           True
(1,2)        6        1           True
(1,3)        1        2           False
(2,3)        7        0           True

For the first line:

* arr[0] = 4 , arr[1] = 3
* 4 XOR 3 = 7
* 4 AND 3 = 0
* 7 > 3

There are 4 good pairs where XOR > AND shows
True. Return 4


*/

function countPairXorAnd(arr) {
    let count = 0;
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((arr[i] ^ arr[j]) > (arr[i] & arr[j])) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  const arr = [4, 3, 5, 2];
  const result = countPairXorAnd(arr);
  console.log(result); // Output: 4
  