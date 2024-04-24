/*
 Given an array of n integers, a  sequence of n-1 operations must be performed on the array.
 
 In each operation,
-  Remove the minimum and maximum elements from the current array and add their sum
   back to the array
-  The cost of an operation cost = ceil((minimum_element + maximum_element) / (maximum_element - minimum_element + 1))

Find the total cost to reduce the array to a single element.

Example
Given arr = [2,3,4,5,7];
The possible sequence of operations are:



Sample Input For Custom Testing
arr[] size n = 5
arr = [2,3,4,5,7]

Sample Output 
8

Sample Input For Custom Testing
arr[] size n = 6
arr = [3,4,2,1,9,6]

Sample Output 
10

Sample Input For Custom Testing
arr[] size n = 4
arr = [8,8,8,8]

Sample Output 
21

*/
function findTotalCost(arr) {
    let total_cost = 0;

    while (arr.length > 1) {
        // Find minimum and maximum elements in the current array
        let min = Math.min(...arr);
        let max = Math.max(...arr);

        // Calculate the cost of the operation
        let cost = Math.ceil((min + max) / (max - min + 1));

        // Get indices of minimum and maximum elements
        let minIndex = arr.indexOf(min);
        let maxIndex = arr.indexOf(max);

        // Remove minimum and maximum element by index
        arr.splice(minIndex, 1);
        arr.splice(maxIndex < minIndex ? maxIndex : maxIndex - 1, 1);

        // Add their sum back to the array
        arr.push(min + max);

        // Add current operation cost to the total cost
        total_cost += cost;
    }

    return total_cost;
}

// Sample Input
const arr1 = [2, 3, 4, 5, 7];
const arr2 = [3, 4, 2, 1, 9, 6];
const arr3 = [8, 8, 8, 8];

console.log(findTotalCost(arr1)); // Output: 8
console.log(findTotalCost(arr2)); // Output: 10
console.log(findTotalCost(arr3)); // Output: 21
