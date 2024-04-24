/* 
QUESTION 1

Count the Employee

the data for the number employeed at several famous IT companies is maintained in the
COMPANY table. Write a query to print the IDs of the companied that have more than 10000
employees in acending order of ID

Input format 
Name type Company
ID
NAME
EMPLOYEES

Output Format
the result should contain the IDs of all the companies that have more than 10000 employees 
in accending order in the following format
Sample Input

COMPANY
ID       NAME       EMPLOYEES
1        Adobe       28085
2        Flifkart    35543
3        Amazon      1089
4        Paytem      9982
5        BookMyShow  5589
6        Oracle      4003
7        NIIT        57782
8        Samsung     2000
9        TCS         10046
10       Wipro        3500

Sample Output :-
1
2
7
9

*/

 
db.COMPANY.aggregate([
    { $match: { EMPLOYEES: { $gt: 10000 } } }, // Filter companies with more than 10000 employees
    { $sort: { ID: 1 } } // Sort the results by ID in ascending order
  ])
  .forEach(company => console.log(company.ID));
  

  // Find Method

  db.COMPANY.find(
  { EMPLOYEES: { $gt: 10000 } }, // Filter criteria: employees greater than 10000
  { ID: 1, _id: 0 } // Projection: Include only the ID field and exclude _id field
).sort({ ID: 1 }); // Sort the results by ID in ascending order


