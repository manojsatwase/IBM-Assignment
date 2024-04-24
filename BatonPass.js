/*
There are n friends standing in a line, each numbered from 1 through n inclusive. the first one friend 1,
holds a baton. Each second , the baton is passed to the next friend in line. Once it reaches the end of the line,
the direction of passing is reversed and passing continues. Determine who will pass and who will recieve the
baton at a given time.

Example 
friends = 4
time = 5

Friends are numbered 1 through 4. Friend 1 holds the baton at time 0. At time 1, It is passed to friend 2. Over 5 seconds,
the baton is passed as 1->2->3->4->3->2. The baton at time 5 is friend 3. The friend receiving the baton is friend 2.
Return [3,2].

*/

function findBatonPosition(friends, time) {
    const period = (friends - 1) * 2; // Calculate the period after which the direction will reverse
    const effectiveTime = time % period; // Calculate the effective time within one period
  
    let currentHolder; // Determine the current baton holder based on the effective time
    if (effectiveTime < friends) {
      currentHolder = 1 + effectiveTime;
    } else {
      currentHolder = friends - (effectiveTime - friends);
    }
  
    let receiver; // Determine the friend receiving the baton
    if (effectiveTime < friends) {
      receiver = currentHolder + 1;
    } else if (effectiveTime === friends - 1) {
      receiver = currentHolder - 1;
    } else if (effectiveTime === friends) {
      receiver = 2;
    } else {
      receiver = currentHolder - 1;
    }
  
    // Handle special cases for receivers outside the range [1, friends]
    if (receiver < 1) receiver = friends;
    else if (receiver > friends) receiver = 1;
  
    return [currentHolder, receiver];
  }
  
  // Example usage
  const friends = 4;
  const time = 5;
  const result = findBatonPosition(friends, time);
  console.log(result); // Output: [3, 2]
  

  