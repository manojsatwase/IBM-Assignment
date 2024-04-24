/*------------------------- IBM 2024 SOFTWARE DEVELOPER ----------------------------------------*/

/* QUESTION 3
An English lecture at HackerElement School is aimed at teaching students the letters of the alphabet.

The structures are provided with a string word that consists of lowercase English letters.in one move
they can choose any index i and let the character at that index can be c. Then the first occurrence of c to
the left of i and the first occurrence of c to the right of i are deleted (Note the operation can still be carried out
even if either the left or right occurrence does'nt exist). For example if word = "adabacaea" and if index 
4 is choose (o based) the first occurence of 'a' to the left and right of index 4(bold indices 2 and 6) are deleted leving word "adbacea"

find the minimum number of moves the students need perform in order to get a word of minimal length

Example
Test Cases 
Sample Test 1
Input 
word = "baabacaa"
Output 3

minimum move 
first time student choose a is 4 index so left of b and right of c delete
final 
*/

function findMinimumMoves(word) {
    let moves = 0;
    let charCount = {}; // Object to store character counts
    for (let i = 0; i < word.length; i++) {
      // Initialize counts for each character
      if (!charCount[word[i]]) {
        charCount[word[i]] = 0;
      }
      charCount[word[i]] += 1;
    }
    
    for (let str in charCount) {
      if (charCount[str] > 1) {
        moves += Math.floor(charCount[str] / 2); // Use Math.floor for integer division
      }
    }
  
    return moves;
  }
  
  console.log(findMinimumMoves("baabacaa")); // Output: 3
  