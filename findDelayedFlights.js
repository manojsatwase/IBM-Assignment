/*
A network of flights contains flight , nodes number of flights denoted by [1,2,.... flight nodes].
There is a list of dependencies among flights denoted by the arrays 
flight_form[] , flight leaving a city, and flight_to[], flights arriving in a city.
Each pair {flight_form[i], flight_to[i]} denotes that flight_from[i] depends on flight_to[i] and must
depart only after flight_to[i] has landed. if a flight is delayed, all the flights dependent on this 
flight and their corresponding dependancies are also delayed.

Given a list of k initially delayed flights and the network as described, find the list of all
delayed flights. Return the list sorted in increasing order of flight numbers.

Example
Consider flight_nodes = 4, and the number of dependencies m=2.
flight_form = [4,3]
flight_to = [1,3]
The number of delayed flights k = 2 , and delayed = [1,3].


Sample Input for Custom Testing
flight_nodes = 4 , flight_edges = 4
[[flight-form[i] , flight_to[i]] = [[1,4],[2,1],[3,1,3]]
delayed[] size k = 1
delayed = [i]

Sample Output
1 2 3 



flight 1 is delayed.
since flight 2 depends on flight 1, it is delayed.
Sience flight 3 depends on the flight 2 it is delayed.

The sorted list of delayed flights is [1,2,3]

Second Sample Input 
flight_nodes = 5 , flight_edges = 5
[[flight-form[i] , flight_to[i]] = [[1,2],[1,4],[2,3,5],[4,5]]
delayed[] size k = 2
delayed = [2,4]

Sample Output 
1 2 4

*/

function findDelayedFlights(){
   
}

const flight_nodes = 5;
const flight_edges = 5;
const flights = [[1, 2], [1, 4], [2, 3,5], [4, 5]]; 
const delayed = [2, 4];
const k = 2;


