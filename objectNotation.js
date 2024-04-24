/*
Implement a simple prototype service to find the difference between two JSON (Javascript Object Notation) objects.

To keep the prototype simple, a JSON will contain only key-value pairs and no nested objects or arrays in it.
Given two JSON stings, json1 and json2, find the list of keys for which the value are different. if a key
is present in only one of the JSONs, it should not be considered in the result.
 The list of keys should be sorted in lexicographically ascending order

Example 
Suppose 
json1 = {"hello":"world","hi":"hello","you":"me"} and 
json2 = {"hello":"world","hi":"hellooo","you":"me"}

The only common key where the values diffe is hi . 
Hence the answer is ["hi"]
*/

function findDifferentKeys(json1,json2){
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const commonKeys = keys1.filter(key => keys2.includes(key));
  const differenceKeys = commonKeys.filter(key => obj1[key] !== obj2[key]);

  return  differenceKeys.sort(); //  The list of keys should be sorted in lexicographically ascending order
}
const json1 = '{"hello":"world","hi":"hello","you":"me"}';
const json2 = '{"hello":"world","hi":"hellooo","you":"me"}';
findDifferentKeys(json1,json2);