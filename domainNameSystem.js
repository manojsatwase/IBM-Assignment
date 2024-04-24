/*
A Domain Name System (DNS) translates domain names to IP addresses which are then used by browsers
to load internet resorces. for quicker DNS lookups. browsers often store a number of recent DNS queries
in a DNS cache. Retrieving data from a DNS server. This task aims to simulate DNS resolution and determine 
the time to process different URLs.

Assume that the DNS cache can store a maximum of the cache_size most recent DNS requests.
i.e , URL-IP mappings. The cache is initially empty. it takes cache_time units of time to fetch data
from the DNS cache , and server_time units of time to fetch data from the DNS server.

Given a list of n URLs visited as an array of strings, urls, determine the minimum time
 taken to resolve each DNS request.

 Sample Input
 const cache_size = 2;
 const cache_time = 2;
 const server_time = 3;
 
 const urls = [
  "www.yahoo.com",
  "www.google.com",
  "www.opera.com",
  "www.safari.com",
  "www.openai.com",
];

Sample Output
3 3 2 2 3
*/

function getMinTime(cache_size, cache_time, server_time, urls) {
  let timeToken = [];
  let queue = [];
  let cacheSet = new Set();

  for (let url of urls) {
    if (cacheSet.has(url)) {
      timeToken.push(cache_time);
      // Move the accessed URL to the end of the queue
      queue.splice(queue.indexOf(url), 1);
      queue.push(url);
    } else {
      if (queue.length >= cache_size) {
        let frontUrl = queue.shift(); // Remove the first URL from the queue
        cacheSet.delete(frontUrl); // Remove the corresponding URL from the cache
      }
      timeToken.push(server_time);
      queue.push(url);
      cacheSet.add(url);
    }
  }

  return timeToken;
}


function getMinTime(cache_size, cache_time, server_time, urls) {
  let timeToken = [];
  let queue = [];

  for (let url of urls) {
    if (queue.includes(url)) {
      timeToken.push(cache_time);
    } else {
      if (queue.length > cache_size) {
        queue.shift();
      }
      timeToken.push(server_time);
      queue.push(url);
    }
  }
  return timeToken;
}


const cache_size = 2;
const cache_time = 2;
const server_time = 3;

const urls = [
  "www.google.com",
  "www.yahoo.com",
  "www.google.com",
  "www.yahoo.com",
  "www.coursera.com",
];

const result = getMinTime(cache_size, cache_time, server_time, urls);

for (let time of result) {
  console.log(time); // Output: 3 3 2 2 3
}

