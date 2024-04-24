/*------------------------- IBM 2024 SOFTWARE DEVELOPER ----------------------------------------*/

/* QUESTION 5 
Given a number n, for each integer i in the range from 1 to n inclusive, print one value
per line as follows:

1 if i is a multiple of both 3 and 5, print FizzBuzz.
2 if i is a multiple of 3 (but not 5), print Fizz.
3 if i is a multiple of 5 (but not 3), print Buzz.
4 if i is a multiple of 3 or 5, print the value of i.

*/


function fizzBuzz(num){
    // num is include not exclude
for(i=1;i<=num;i++){
   if(i%3===0 && i%5===0){
       console.log("fizzbuzz")
   }
   if(i%3===0 && i%5!==0){
       console.log("Fizz")
   }
   if(i%3!==0 && i%5===0){
       console.log("Buzz")
   }
      if(i%3!==0 && i%5!==0){
       console.log(i)
   }   
}
}


