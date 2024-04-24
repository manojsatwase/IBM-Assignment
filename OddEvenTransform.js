/*
 Odd-Even_transform Problem works on an array of integer (both positive , negative, and zero), by taking in a value (a whole number) 
 that specifies the number of times the transformation has to be applied
 
 On an array of integers the transformation that n number of times needs to occur.
 - Adds three(+3) to each odd number.
 - Substracts three (-3) from each even integer.

 Example
[3,4,9] means the array with integers 3,4,9 has to undergo transformation 3 times.
[3,4,9]-> [6,1,12]-<[3,4,9]->[6,1,12] so the result is [6,1,12]

*/

function oddEvenTransform(arr,n=3){
  for(let i=0;i<n;i++){ // how many times transform apply
     for(let j=0;j<arr.length;j++){
        if(arr[j]%2 ===0 ) {
            // even number 
           // - Substracts three (-3) from each even integer.
           arr[j]-=3;
        }else{
            // odd number
            // - Adds three(+3) to ech odd number.
            arr[j]+=3;

        }
     }
  }
  return arr;
}
oddEvenTransform([3,4,9],3);
