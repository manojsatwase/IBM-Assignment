/*  STRING REPLACEMENT

Two stings are given , word and substr. Some of the characters in word are a question mark(?).
Find the lexicographically smallest string that can be obtained by replacing '?' characters
such that substr appears at least once. if it is not possible to do so return "-1".

Note:

- A substring is a contiguous sequence of characters within a string.
For example, "bcd" is a substring of "abcde" but "ac" is not.

- For two strings a and b of the same length a is 

Sample Input

const word = "as?b?e?gf";
const substr = "dbk";

getSmallestString(word,substr);

Sample Output
asdbkeagf

*/

function getSmallestString(word, substr) {
    const len_word = word.length;
    const len_substr = substr.length;

    for (let i = 0; i <= len_word - len_substr; i++) {
        let match_found = true;
        let temp_word = word.split(""); // Convert to array for mutable operations

        for (let j = 0; j < len_substr; j++) {
            if (temp_word[i + j] !== '?' && temp_word[i + j] !== substr[j]) {
                match_found = false;
                break;
            }
            temp_word[i + j] = substr[j];
        }
        
        if (match_found) {
            for (let k = 0; k < len_word; k++) {
                if (temp_word[k] === "?") {
                    temp_word[k] = "a";
                }
            }
            return temp_word.join(""); // Convert back to string
        }
    }
    return "-1";
}

const word = "as?b?e?gf";
const substr = "dbk";
console.log(getSmallestString(word, substr)); // Output: "asdbkeagf"



/*

function getSmallestString(word, substr) {
    let smallestString = null;
    let result = "-1";

    for (let i = 0; i <= word.length - substr.length; i++) {
        let newWord = word.slice(0, i) + substr + word.slice(i + substr.length);

        // Replace question marks with smallest lexicographical character
        for (let j = 0; j < newWord.length; j++) {
            if (newWord[j] === '?') {
                newWord = newWord.substring(0, j) + 'a' + newWord.substring(j + 1);
            }
        }

        if (newWord.indexOf(substr) !== -1 && (smallestString === null || newWord < smallestString)) {
            smallestString = newWord;
            result = newWord;
        }
    }

    return result;
}

const word = "ab?b?e?gf";
const substr = "dbk";
console.log(getSmallestString(word, substr)); // Output: asdbkeagf

*/
