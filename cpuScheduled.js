/*
when multiple tasks are executed on a single threaded CPU,
the tasks are scheduled based on the principle of pre-emption.
when a higher-priority task arrives in the excution queue,
then the lower priority task is pre-empted,
i.e. its execution is paused until the higher-priority task is complete.

There are n functions to be excuted on a single-threaded CPU,
with each function having a unique ID between 0 and n-1
Given an integer n, representing the number of functions
to be executed, and an execution log as an array of strings, logs, of 
size m, determine the exclusive times of each of the functions.
Exclusive time is the sum of excution times for all calls to a 

minimum time return one task excution what a minimum time excute
*/

function exclusiveTime(n, logs) {
    const exclusiveTimes = new Array(n).fill(0);
    const stack = [];
  
    for (const log of logs) {
      const [fid, action, timestamp] = log.split(':');
      const funcId = parseInt(fid);
      const time = parseInt(timestamp);
  
      if (action === 'start') {
        if (stack.length > 0) {
          const [prevId, prevStartTime] = stack[stack.length - 1];
          exclusiveTimes[prevId] += time - prevStartTime;
        }
        stack.push([funcId, time]);
      } else {
        const [prevId, prevStartTime] = stack.pop();
        exclusiveTimes[funcId] += time - prevStartTime + 1;
        if (stack.length > 0) {
          stack[stack.length - 1][1] = time + 1;
        }
      }
    }
  
    return exclusiveTimes;
  }
  
  // Example usage
  const n = 3;
  const logs = ["0:start:0","1:start:2","2:start:3","2:end:5","1:end:7","0:end:8"];
  const result = exclusiveTime(n, logs);
  console.log(result);  // Output: [3, 4, 2]
  