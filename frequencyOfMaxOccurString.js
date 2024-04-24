/* FREQUENCY OF MAXIMUM OCCURRING STRINS
Given a string containing a number of characters, find the substrings within the string
that satisfy the conditiona below:

- The substring's length should be in the inclusive interval [minLength,maxLength]
- The total number of unique characters should not exceed maxUnique.

Using those conditions , determine the frequency of the maximum occurring substring.

Example 1
components = 'abcde'
minLength = 2
maxLength = 3
maxUnique = 3

Output 
1

Example 2
components1 = 'abcde'
minLength1 = 2
maxLength1 = 4
maxUnique1 = 26

Output
 1

*/2


//find the subStrings
function getMaxOccurrences(components, minLength, maxLength, maxUnique) {
    let n = components.length;
    let maxOccurrences = 0;
    let maxOccurringSubstrings = new Set();
  
    for (let len = minLength; len <= maxLength; len++) {
      for (let i = 0; i <= n - len; i++) {
        let substring = components.substring(i, i + len);
        let uniqueChars = new Set(substring);
  
        if (uniqueChars.size <= maxUnique) {
          let count = 1;
          for (let j = i + 1; j <= n - len; j++) {
            let nextSubstring = components.substring(j, j + len);
            let nextUniqueChars = new Set(nextSubstring);
  
            if (nextUniqueChars.size <= maxUnique && nextSubstring === substring) {
              count++;
            }
          }
  
          if (count > maxOccurrences) {
            maxOccurrences = count;
            maxOccurringSubstrings.clear();
            maxOccurringSubstrings.add(substring);
          } else if (count === maxOccurrences) {
            maxOccurringSubstrings.add(substring);
          }
        }
      }
    }
  
    console.log('Output:', maxOccurrences);
  }
  
  const components1 = 'abcde';
  const minLength1 = 2;
  const maxLength1 = 3;
  const maxUnique1 = 3;
  
  const components2 = 'abcde';
  const minLength2 = 2;
  const maxLength2 = 4;
  const maxUnique2 = 26;
  
  getMaxOccurrences(components1, minLength1, maxLength1, maxUnique1);
  getMaxOccurrences(components2, minLength2, maxLength2, maxUnique2);
  