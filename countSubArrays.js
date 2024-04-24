/*
Contiguos subarrays are a group of an uniterrupted range of elements from an array as they occur.
No elements in the range can be skipped or reordered , Given an array of integers, numbers and an 
integer k,determine the total number of subarrays of numbers that have a product that is less than or equal to k

numbers = [2,3,4]

The subarrays are [[2],[3],[4],[2,3],[3,4],[2,3,4]].
The product of a subarray is the product of all of its elementss so the products
for the list of subarrays are [2,3,4,6,12,24] if k=6 , 4 subarray satisfy the
condition.[2],[3],[4],[2,4].

*/


function countSubArrays(numbers, k) {
    let count = 0;
    let product = 1;
    let left = 0;
  
    for (let right = 0; right < numbers.length; right++) {
      product *= numbers[right];
  
      // Shrink the window if product exceeds k
      while (product > k && left <= right) {
        product /= numbers[left];
        left++;
      }
  
      // Count subarrays within the window
      count += right - left + 1;
    }
  
    return count;
  }
  
  // Example usage
  const numbers = [2, 3, 4];
  const k = 6;
  const result = countSubArrays(numbers, k);
  console.log(result); // Output: 4
  