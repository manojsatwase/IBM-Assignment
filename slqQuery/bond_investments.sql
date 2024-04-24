/*
QUESTION 7
A financial analysis firm is buliding a tool to analyze the sum of the cash flows
from bond invesments, Create a query to extract insights on the cash flows per investor.

The required statistics a list of all invester and their total , minimum,maximim, and average cash flow from investments.

The results should have the following cloumns: email | invesments | min_cash_flow | max_cash_flow | avg_cash_flow.

* email - invester email
* investments - total number of the investments by a specific investor
* min_cash_flow - minimum cash flow from investments for a specific investor
* max_cash_flow - maximum cash flow from investnents for a specific investor
* avg_cash_flow - average cash flow from investments for a specific investor.
  rounded to two decimal places

The result should be sorted in ascending order by email.

Note:
* the investors who have a total cash flow greater than 1,000,000 should be included in the results.

SQL SOLUTION

*/

SELECT 
   email,
   COUNTA(*) AS investments,
   MIN(cash_flow) AS min_cash_flow,
   MAX(cash_flow) AS max_cash_flow,
   ROUND(AVG(cash_flow),2) AS avg_cash_flow
FROM
   bond_investments
GROUP BY
    email
ORDER BY
   email ASC;

