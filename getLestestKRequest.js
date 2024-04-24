/*
Given n request ids as an array of strings, requests, and an integer k, after all request
are received, find the k most recent requests Report the answer in order of most recent to least recent.

Example 
Suppose n = 5, request = ['item1','item2','item3','item1','item3'], and k=3

Starting from the right and moving left, collecting distinct requests, there is item3 followed by
'item1'. Skip the second instance of 'item3' and find 'item2'. 

The answer id ['item3','item1','item2'] 

most recent means subse end me aiyi ho

*/


function getLatestKRequest(requests,k){
  const recentRequests = [];
  const seenRequests = new Set();
  for(let i=requests.length-1; i>=0;i--){
   const request = requests[i];

   if(!seenRequests.has(request)){
    recentRequests.push(request);
    seenRequests.add(request);
   }

   if(recentRequests.length === k){
    break;
   }
  }
  return seenRequests;
}
getLatestKRequest(['item1','item2','item3','item1','item3'],3)