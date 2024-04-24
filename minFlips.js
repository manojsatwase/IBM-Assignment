
/*------------------------- IBM 2024 SOFTWARE DEVELOPER ----------------------------------------*/
/* QUESTION 1
A password string , pwd , consists of binary charactrs (0s, 1s).
A cyber security expert is trying to determine the minimum number of changes required
to make the password secure.To do so, it must be divided into substring of non-overlapping , 
even length substrings. Each substring can only contain 1s or 0s, not a mix. This helps to
ensure that the password is strong and less vulnerable to hacking attacks.

Find the minimum number of characters that must be flipped in the password string .
eg. changed from 0 to 1 or 1 to 0 to allow the string to be divided as describe.


Test Case
Sample Test 1
Input 
pwd = "101011"
Output 2


Smaple Test 2
Input
pwd = "100110"
Output 3

*/



function minFlips(pwd){
 let countFlips = 0;
 for(let i=0;i<pwd.length-1;i+=2){
    if(pwd[i]!==pwd[i+1]){
        countFlips++;
    }
 }
 return countFlips;
}

minFlips("101011");
minFlips("100110");