/*
There is Hackathon organized by HackerRank which has 2 seperate tracks,
healthcare and e-commerce. For track 1, the requiremed team size is teamSize_1,
while for track 2, the required team size is treamSize_2 The total number of participants
is p.

Find the minimum number of teams into which the participants can be devided such that each
participant nelongs to exactly one team (either of track 1 or track 2), and each team has 
a size equal to either teamSize_1 or teamSize_2 if no such division is possible, return -1.

Example
Consider teamSize_1 = 3 , teamSize_2 = 4 and
number of participants p=7

Optimally there is 1 team of 3 and 1 team of 4. The minimum number of teams is 2

Sample Input
const teamSize_1 = 3
const teamSize_2 = 4
const p=6  // participant of team

Sample Output 
2

Explaination
Optimally there are 2 teams  of 3, and no teams of 4
*/


function countTeams(teamSize_1, teamSize_2, p){
 let minT1 = p / teamSize_1;
 let rem1 = p % teamSize_1;
 
 while(minT1 >= 0){
    if(rem1 % teamSize_2 === 0){
        break;
    }
    minT1--;
    rem1 +=teamSize_1;
 }

 let minT2 = p / teamSize_2;
 let rem2 = p % teamSize_2;

 while(minT2 >=0){
    if(rem2 % teamSize_1 === 0) {
        break;
    }
    minT2--;
    rem2 += teamSize_2;
 }

 if(minT1 < 0 && minT2 < 0){
    return -1;
 }else if (minT1 < 0){
    return minT2 + rem2 / teamSize_1;
 }else if(minT2 < 0){
    return minT1 + rem1 / teamSize_2;
 }else{
    return Math.min(minT1+rem1 / teamSize_2,minT2 + rem2 / teamSize_1);
 }
}

// const teamSize_1 = 3;
// const teamSize_2 = 4;
// const p = 6;

// const result = countTeams(teamSize_1, teamSize_2, p);
// console.log(result); // Output: 2 


const teamSize_1 = 3;
const teamSize_2 = 4;
const p = 7;

const result =Math.floor(countTeams(teamSize_1, teamSize_2, p));
console.log(result); // Output: 2